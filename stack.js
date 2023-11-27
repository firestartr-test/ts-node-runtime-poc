const { TerraformStack } = require("cdktf");


class MyStack extends TerraformStack {
    constructor(scope, name, props) {
        super(scope, name);

        const { AwsOidc } = require('./.gen/modules/aws-oidc.ts')

        new AwsOidc(this, "test", {
            organization: props.organization,
            region: props.region,
            subs: props.subs,
        })

    }
}

module.exports = MyStack;
