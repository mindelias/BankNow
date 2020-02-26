import db from "../src/models";
import sendResponse from "../helpers/response";
import * as tokenizer from "../services/auth.service";
import httpStatus from "http-status";
import {v4 as uuidv4 }from 'uuid';

export const creatAccount = async (req, res, next) => {
    let { accountType } = req.body;
    let userId = req.token.id
    let accountBalance = 0.0
    const uuidNumber = uuidv4().split('-')
    const type = accountType === 'savings' ? 'Sav' : 'Cur'
    let accountNumber = `${type}-${uuidNumber[0]}${uuidNumber[3]}`
    console.log(accountNumber);
    
  
    try {
      const account = await db.Account.create({ userId, accountBalance, accountType, accountNumber });
      return res
      .status(httpStatus.CREATED)
      .json(sendResponse(httpStatus.OK, "success", account, null));
    } catch (error) {
        next(error);
    }
    
};

export const deposit = async (req, res, next) => {
    let { amount } = req.body;
    let userId = req.token.id
    
    try {
        const {accountBalance} = await db.Account.findOne({where:{userId}})
        const balance = accountBalance + parseFloat(amount)
        console.log(balance)
        const newBalance = await db.Account.update(
            { accountBalance: balance },
            {returning:true, where: { userId } }
            );
            
      return res
        .status(httpStatus.CREATED)
        .json(sendResponse(httpStatus.OK, "success", newBalance, null));
    } catch (error) {
      next(error);
    }
  };

  export const withdraw = async (req, res, next) => {
    let { amount } = req.body;
    let userId = req.token.id
    
    try {
     const {accountBalance} = await db.Account.findOne({where:{userId}})
     if(accountBalance < amount){
        return res
        .status(httpStatus.BAD_REQUEST)
        .json(sendResponse(httpStatus.BAD_REQUEST, "error", null, 'Insufficient Balance'));
     }
     const balance = accountBalance - parseFloat(amount)
      const newBalance = await db.Account.update(
        { accountBalance: balance },
        {returning:true, where: { userId } }
      );
      return res
        .status(httpStatus.CREATED)
        .json(sendResponse(httpStatus.OK, "success", newBalance, null));
    } catch (error) {
      next(error);
    }
  };

  export const transfer = async (req, res, next) => {
    const { amount, accountNumber } = req.body;
    const userId = req.token.id
    
    try {
     const transferAccount = await db.Account.findOne({where:{accountNumber}})
     if(!transferAccount){
        return res
        .status(httpStatus.NOT_FOUND)
        .json(sendResponse(httpStatus.NOT_FOUND, "error", null, 'Account number does not exist'));
     }
     const { accountBalance } = transferAccount
     const balance = accountBalance + parseFloat(amount)
      await db.Account.update(
        { accountBalance: balance },
        {where: { accountNumber } }
      );

      const payerAccount = await db.Account.findOne({where:{userId}})
      console.log(payerAccount);
      const decreaseBalance = payerAccount.accountBalance - parseFloat(amount)
      const payerBalance = await db.Account.update(
        { accountBalance: decreaseBalance },
        {returning:true, where: { userId} }
      );
      return res
        .status(httpStatus.CREATED)
        .json(sendResponse(httpStatus.OK, "success", payerBalance, null));
    } catch (error) {
      next(error);
    }
  };
 
