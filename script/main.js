jQuery(document).ready(function() {
    var userAccount = {};
    var transactions = [];

    caseData = {}
    caseData.subjects = ['Melissa  Roberts', 'Jose Martinez Rose', 'Veronica  Johnston','Anthony Barrett Koch'];
    caseData.organization = "Berry Western Bank";
    caseData.rawData = "";

    jQuery.ajax({
            type: 'GET',
            headers: {
                'accept': 'application/json;odata=verbose'
            },
            url: 'script/customerData.json'
        }).done(function(data) {
            caseData.rawData = data;
            var customers = [];
            for(d in data) {
                caseSubjects = caseData.subjects;
                for(c in caseSubjects) {
                    if(data[d].full_name == caseSubjects[c]) {
                        customers.push(data[d]);
                    }
                }
            }
            initBankName(caseData.organization);
            initSubjects(customers);
            console.log(customers);
    });

    // Subject Click

    jQuery('body').on('click', '.subject-list .subject', function() {
        jQuery('.subject-list .subject').removeClass('active');
        jQuery(this).addClass('active');
        resetUser();
        userAccount.user = jQuery(this).attr('data-class-subject-name');

        var customer_id = jQuery(this).attr('data-class-subject-name');
        var accountsRaw = caseData.rawData.filter(function(item) { return item.customer_id; });
        var accounts = _.groupBy(accountsRaw, function(item) { return item.account_number });

        //buildAccounts(accounts);
    });

    // Account Click

    jQuery('body').on('click', '.account-list .account', function() {
        jQuery('.account-list .account').removeClass('active');
        jQuery(this).addClass('active');
        userAccount.account = jQuery(this).attr('data-account-name');
        buttonState();
    });

    // Transaction Click

    jQuery('body').on('click', '.transaction-list .transaction', function() {
        jQuery(this).toggleClass('active');

        transactions = [];
        jQuery('.transaction-list .transaction.active').each(function() {
            var transactionName = jQuery(this).attr('data-transaction-id');
            transactions.push(transactionName);
        });

        transactionButtonState();
    });

    // Init Button Click

    jQuery('.main-block-init-button').on('click', function() {
        if(jQuery(this).attr('disabled') == null || jQuery(this).attr('disabled') == undefined) {

            jQuery('.transaction-container ul.transaction-list').empty();
            jQuery('.transaction-container ul.transaction-list').append('<li class="spinner"><i class="fa fa-spinner fa-spin"></i>');
            jQuery('#subject-modal-title .subject-name').text(userAccount.user);
            jQuery('#subject-modal-title .account-name').text(userAccount.account);

            // *Replace with API*

            var dummy = [{tn: 'Transaction #1', FinInst: 'JP Morgan Chase'},{tn: 'Transaction #2', FinInst: 'Citi'},{tn: 'Transaction #3', FinInst: 'Big Bank 3'}];
            setTimeout(function() { buildTransactions(dummy, jQuery('.transaction-container ul.transaction-list'))}, 2000);

            jQuery('#subjectModal').modal('show');
        }
    })

    function buttonState() {
        if(userAccount.account != null && userAccount.account.length > 0 && userAccount.user != null && userAccount.user.length >0) {
                jQuery('.main-block-init-button').removeAttr('disabled');
        }
    }

    function initSubjects(customers) {
        jQuery('.subject-list ul').empty();

        for(c in customers) {
            var subjectTemplate = '<li class="subject" data-class-subject-name="{{CUSTOMERID}}">{{CUSTOMERNAME}}</li>';

            subjectTemplate = subjectTemplate.replace(/{{CUSTOMERID}}/, customers[c].customer_id);
            subjectTemplate = subjectTemplate.replace(/{{CUSTOMERNAME}}/, customers[c].full_name);

            jQuery('.subject-list ul').append(subjectTemplate);
        }

    }

    function initBankName(name) {
        jQuery('.bank-name').text(name);
    }

    function resetUser() {
        userAccount = {};
        jQuery('.main-block-init-button').attr('disabled', 'disabled');
    }

    function transactionButtonState() {
        if(transactions.length > 0) {
            jQuery('#subjectModal .submitButton').removeAttr('disabled');
        } else {
            jQuery('#subjectModal .submitButton').attr('disabled','disabled');
        }
    }

    function buildAccounts(subjects) {
        var dummyAccounts = ['Account #1', 'Account #2', 'Account #3', 'Account #4'];
        var accountsMarkup = "";
        var accountsTemplate = '<div class="account-list"> \
                                    <h3 class="account-header">Case Accounts</h3> \
                                    <ul class="accounts"> \
                                        {{ACCOUNTLIST}} \
                                    </ul> \
                                </div>'
        for(d in subjects) {
                var accountTemplate = "<li class='account' data-account-name='{{ACCOUNTNAME}}'>{{ACCOUNTNAME}}</li>";
                var account = accountTemplate;
                account = account.replace(/{{ACCOUNTNAME}}/g, subjects[d].account_number);
                accountsMarkup += account;
        }

        accountsTemplate = accountsTemplate.replace(/{{ACCOUNTLIST}}/, accountsMarkup);

        jQuery('.main-block .accounts-container').empty();
        jQuery('.main-block .accounts-container').append(accountsTemplate);
    }

    function buildTransactions(data, target) {
        target.empty()

        for(d in data) {
            var transactionTemplate = '<li class="transaction" data-transaction-id="{{TRANSACTIONNAME}}"> \
                                            <div class="row"> \
                                            <div class="col-xs-5 transaction-name"> \
                                                {{TRANSACTIONNAME}} \
                                            </div> \
                                            <div class="col-xs-5 financial-institution"> \
                                                {{FINANCIALINSTITUTION}} \
                                            </div> \
                                        </div> \
                                    </li>';

			transactionTemplate = transactionTemplate.replace(/{{TRANSACTIONNAME}}/g, data[d].tn);
			transactionTemplate = transactionTemplate.replace(/{{FINANCIALINSTITUTION}}/, data[d].FinInst);

			target.append(transactionTemplate);
        }
    }
})