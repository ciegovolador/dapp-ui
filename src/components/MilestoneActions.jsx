/* eslint-disable react/prefer-stateless-function */
// @dev: not prefering stateless here because functionality will be extended
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import BigNumber from 'bignumber.js';
import Milestone from '../models/Milestone';
import User from '../models/User';

import DeleteProposedMilestoneButton from './DeleteProposedMilestoneButton';
import AcceptRejectProposedMilestoneButtons from './AcceptRejectProposedMilestoneButtons';
import ReproposeRejectedMilestoneButton from './ReproposeRejectedMilestoneButton';
import RequestMarkMilestoneCompleteButton from './RequestMarkMilestoneCompleteButton';
import CancelMilestoneButton from './CancelMilestoneButton';
import ApproveRejectMilestoneCompletionButtons from './ApproveRejectMilestoneCompletionButtons';
import WithdrawMilestoneFundsButton from './WithdrawMilestoneFundsButton';
import EditMilestoneButton from './EditMilestoneButton';

class MilestoneActions extends Component {
  render() {
    const { milestone, balance, currentUser } = this.props;

    return (
      <Fragment>
        <AcceptRejectProposedMilestoneButtons
          milestone={milestone}
          balance={balance}
          currentUser={currentUser}
        />

        <ReproposeRejectedMilestoneButton milestone={milestone} currentUser={currentUser} />

        <RequestMarkMilestoneCompleteButton
          milestone={milestone}
          balance={balance}
          currentUser={currentUser}
        />

        <CancelMilestoneButton milestone={milestone} balance={balance} currentUser={currentUser} />

        <DeleteProposedMilestoneButton
          milestone={milestone}
          balance={balance}
          currentUser={currentUser}
        />

        <ApproveRejectMilestoneCompletionButtons
          milestone={milestone}
          balance={balance}
          currentUser={currentUser}
        />

        <WithdrawMilestoneFundsButton
          milestone={milestone}
          balance={balance}
          currentUser={currentUser}
        />

        <EditMilestoneButton milestone={milestone} balance={balance} currentUser={currentUser} />
      </Fragment>
    );
  }
}

MilestoneActions.propTypes = {
  milestone: PropTypes.instanceOf(Milestone).isRequired,
  currentUser: PropTypes.instanceOf(User).isRequired,
  balance: PropTypes.instanceOf(BigNumber).isRequired,
};

export default MilestoneActions;
