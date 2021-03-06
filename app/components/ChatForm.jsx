import React from 'react';
import { Field, reduxForm } from 'redux-form';
import connect from '../connect';

const mapStateToProps = (state) => {
  const props = {
    currentChannelId: state.currentChannelId,
    messageCreatingState: state.messageCreatingState,
  };
  return props;
};

@connect(mapStateToProps)

class ChatForm extends React.Component {
  sendUpdateMessage = (values) => {
    this.props.updateMessages(
      this.props.currentChannelId,
      { text: values.text, userName: this.props.userName },
    );
    this.props.reset();
  };

  render() {
    return (
      <form action="" id="msgForm" className="input-group mb-3" onSubmit={this.props.handleSubmit(this.sendUpdateMessage)}>
        <Field className="form-control" name="text" required component="input" type="text" />
        <div className="input-group-append">
          <button className="btn btn-outline-secondary" type="submit">Send</button>
        </div>
      </form>
    );
  }
}

export default reduxForm({
  form: 'addMessage',
})(ChatForm);
