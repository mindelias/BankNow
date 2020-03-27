import db from "../src/models";
import sendResponse from "../helpers/response";
import * as tokenizer from "../services/auth.service";
import httpStatus from "http-status";
import { v4 as uuidv4 } from "uuid";

export const creatAccount = async (req, res, next) => {
  let { accountType } = req.body;
  let userId = req.token.id;
  let accountBalance = 0.0;
  const uuidNumber = uuidv4().split("-");
  const type = accountType === "savings" ? "Sav" : "Cur";
  let accountNumber = `${type}-${uuidNumber[0]}${uuidNumber[3]}`;
  // console.log(accountNumber);

  try {
    const account = await db.Account.create({
      userId,
      accountBalance,
      accountType,
      accountNumber
    });
    return res
      .status(httpStatus.CREATED)
      .json(sendResponse(httpStatus.OK, "success", account, null));
  } catch (error) {
    next(error);
  }
};

export async function getAccounDetails(req, res, next) {
  try {
    const user = await db.Account.findOne({ where: { userId: req.token.id } });
    return res
      .status(httpStatus.OK)
      .json(sendResponse(httpStatus.OK, "success", user, null));
  } catch (error) {
    next(error);
  }
}

export const deposit = async (req, res, next) => {
  let { Amount } = req.body;
  let userId = req.token.id;
  let transactionType = "credit";

  try {
    const { accountBalance, accountNumber } = await db.Account.findOne({
      where: { userId }
    });
    const balance = accountBalance + parseFloat(Amount);
    // console.log(balance);
    const newBalance = await db.Account.update(
      { accountBalance: balance },
      { returning: true, where: { userId } }
    );
    await db.Transaction.create({
      userId,
      payeeID: userId,
      amount: Amount,
      accountNumber,
      transactionType
    });
    return res
      .status(httpStatus.CREATED)
      .json(sendResponse(httpStatus.OK, "success", newBalance, null));
  } catch (error) {
    next(error);
  }
};

export const withdraw = async (req, res, next) => {
  let { amount } = req.body;
  let userId = req.token.id;
  let transactionType = "debit";

  try {
    const { accountBalance } = await db.Account.findOne({ where: { userId } });
    if (accountBalance < amount) {
      return res
        .status(httpStatus.BAD_REQUEST)
        .json(
          sendResponse(
            httpStatus.BAD_REQUEST,
            "error",
            null,
            "Insufficient Balance"
          )
        );
    }
    const balance = accountBalance - parseFloat(amount);
    const newBalance = await db.Account.update(
      { accountBalance: balance },
      { returning: true, where: { userId } }
    );
    await db.Transaction.create({
      userId,
      payeeID: userId,
      amount,
      accountNumber,
      transactionType
    });
    return res
      .status(httpStatus.CREATED)
      .json(sendResponse(httpStatus.OK, "success", newBalance, null));
  } catch (error) {
    next(error);
  }
};

export const transfer = async (req, res, next) => {
  const { amount, accountNumber } = req.body;
  const payerId = req.token.id;
  let transactionType = "debit";

  try {
    const transferAccount = await db.Account.findOne({
      where: { accountNumber }
    });
    const { accountBalance, userId} = transferAccount;

    const payerAccount = await db.Account.findOne({
      where: { userId: payerId }
    });
    const beneficiary = await db.User.findOne({
      where: { id: userId}
    });

    const sender = await db.User.findOne({
      where: { id: payerId}
    });
    
    // check if beneficiary exist in banknow database
    if (!transferAccount || !payerAccount) {
      return res
        .status(httpStatus.NOT_FOUND)
        .json(
          sendResponse(
            httpStatus.NOT_FOUND,
            "error",
            null,
            "Account number does not exist"
          )
        );
    }
    // check if there is sufficient money before transffering to beneficiary
    if (payerAccount.accountBalance < amount) {
      return res
        .status(httpStatus.BAD_REQUEST)
        .json(
          sendResponse(
            httpStatus.BAD_REQUEST,
            "error",
            null,
            "Insufficient Balance"
          )
        );
    }
    // else you can tranfer to beneficiary
    
    const balance = accountBalance + parseFloat(amount);
    await db.Account.update(
      { accountBalance: balance },
      { where: { accountNumber } }
    );
    //// generating transations details for beneficairy
    await db.Transaction.create({
      userId,
      recipient: sender.fullName,
      amount,
      accountNumber,
      transactionType: "credit"
    });

    // console.log(payerAccount);
    // updating payer's account by debiting the account
    const decreaseBalance = payerAccount.accountBalance - parseFloat(amount);
    const payerBalance = await db.Account.update(
      { accountBalance: decreaseBalance },
      { returning: true, where: { userId: payerId } }
    );
    // generating transations details for payer's
    await db.Transaction.create({
      userId: payerId,
      recipient: beneficiary.fullName,
      amount,
      accountNumber,
      transactionType
    });
    return res
      .status(httpStatus.OK)
      .json(sendResponse(httpStatus.OK, "success", payerBalance, null));
  } catch (error) {
    next(error);
  }
};

export async function getTransaction(req, res, next) {
  try {
    const details = await db.Transaction.findAll({
      where: { userId: req.token.id }
    });
    // console.log(details.Transaction.dataValues);
    
    // const response = details.map(elem => {
    //   return db.User.findAll({ where: { id: elem.dataValues.payeeID } });
    // });
    
    // let newRes = await Promise.all(response);
    // console.log(newRes);
    // let result = details.map(elem => {
    //   // console.log(newRes);
      
    //   newRes.map(item => {
    //     return item.map(element => {
    //       // console.log(element.User);
          
    //       elem.dataValues["name"] = element.fullName;
    //     });
    //   });
    //   return elem;
    // });
    // console.log(result);

    return res
      .status(httpStatus.OK)
      .json(sendResponse(httpStatus.OK, "success", details, null));
  } catch (error) {
    next(error);
  }
}

// await db.User.findAll({include: [{model: db.Account}]});

// Albums.findAll({ include:
//   [{ model: Artists,
//      as: 'Singer',
//      where: { name: 'Al Green' }
//   }] })
//   .then(albums => console.log(albums))
//   .catch(console.error)
