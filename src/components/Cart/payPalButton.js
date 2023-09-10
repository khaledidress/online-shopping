import React from 'react';
import PaypalExpressBtn from 'react-paypal-express-checkout';

export default class MyApp extends React.Component {
    render() {
        const onSuccess = (payment) => {
            console.log("The payment was succeeded!", payment);
            this.props.clearCart();
            this.props.history.push("/");


        }

        const onCancel = (data) => {
            console.log('The payment was cancelled!', data);
        }

        const onError = (err) => {
            console.log("Error!", err);

        }

        let env = 'sandbox';
        let currency = 'USD';
        const client = {
            sandbox: 'AavqkVLOSPC4kJHFYzChRvvGefVEj2uoTHBKC_z-KBJ1cC55S8fGOWLPD_okqFp2CfFWJ8xjrZPo9WqR',
            production: 'YOUR-PRODUCTION-APP-ID',
        }
        return (
            <PaypalExpressBtn env={env}
                client={client}
                currency={currency}
                total={this.props.totalAmount}
                onError={onError}
                onSuccess={onSuccess}
                onCancel={onCancel} />
        );
    }
}