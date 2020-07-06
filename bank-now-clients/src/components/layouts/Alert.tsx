import React from "react";
import { connect } from "react-redux";
 

interface props {
  alerts: any;
}

const AlertState: React.FC<props> = ({ alerts }) => {
  return (
    <div>
      {alerts.length > 0 &&
        alerts.map((alert: any) => (
          <div key={alert.id} className={`alert alert-${alert.type}`}>
            <i className="fas fa-info-circle">{alert.msg}</i>
          </div>
        ))}
    </div>
  );
};

const mapStateToProps = (state: any) => ({
 alerts: state.Alert
});

export default connect(mapStateToProps)(AlertState);
