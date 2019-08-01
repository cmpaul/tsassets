jQuery(document).ready(function() {
    var userAccount = {};
    var transactions = [];

    caseData = {}
    caseData.subjects = ['Melissa  Roberts', 'Jose Martinez Rose', 'Veronica  Johnston','Anthony Barrett Koch'];
    caseData.organization = "Berry Western Bank";
    caseData.rawData = "";

    caseData.customers = [
        {
           "account_number": "GVBCGB00000000166976",
           "full_name": "Serrano Group LTD",
           "address": "6296 Nathan Place Apt. 447  Parbold  West Lancashire",
           "phone_number": 7192064048,
           "primary_source_of_funds": "Business Activity"
        },
        {
           "account_number": "GVBCGB00000000168025",
           "full_name": "Lee and Sons LTD",
           "address": "928 Meyer Plaza Apt. 845  King's Cross  Camden",
           "phone_number": 7933396367,
           "primary_source_of_funds": "Business Activity"
        },
        {
           "account_number": "GVBCGB00000000170437",
           "full_name": "Bradford LTD",
           "address": "71394 Silva Ferry Suite 721  Purewell  Christchurch",
           "phone_number": 7690674442,
           "primary_source_of_funds": "Business Activity"
        },
        {
           "account_number": "GVBCGB00000000171839",
           "full_name": "Allen",
           "address": " 3555 Wilcox Brooks Johnston and Hernandez LTD  West Kirby  Wirral",
           "phone_number": 7817926211,
           "primary_source_of_funds": "Business Activity"
        }
     ]

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
            var subjectTemplate = '<li class="subject" data-class-subject-name="{{ACCOUNT}}"><div class="account-info"><div class="name">{{NAME}}</div><div class="account-number">{{ACCOUNT}}</div> \
                                        <div class="address">Address: {{ADDRESS}}</div> \
                                        <div class="phone-number">Phone Number: {{PHONE}}</div> \
                                        <div class="psof">Primary Source of Funds: {{FUNDSOURCE}}</div> \
                                        </div></li>';

                subjectTemplate = subjectTemplate.replace(/{{NAME}}/g, customers[c].full_name);
                subjectTemplate = subjectTemplate.replace(/{{ACCOUNT}}/g, customers[c].account_number);
                subjectTemplate = subjectTemplate.replace(/{{ADDRESS}}/g, customers[c].address);
                subjectTemplate = subjectTemplate.replace(/{{PHONE}}/g, customers[c].phone_number);
                subjectTemplate = subjectTemplate.replace(/{{FUNDSOURCE}}/g, customers[c].primary_source_of_funds);

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
                var accountTemplate = '<div class="account-info"><div class="name">{{NAME}}</div><div class="account-number">{{ACCOUNT}}</div> \
                                        <div class="address">{{ADDRESS}}</div> \
                                        <div class="phone-number">{{PHONE}}</div> \
                                        <div class="psof">{{FUNDSOURCE}}</div> \
                                        </div>';

                var account = accountTemplate;
                account = account.replace(/{{NAME}}/g, subjects[d].account_number);
                account = account.replace(/{{ACCOUNT}}/g, subjects[d].account_number);
                account = account.replace(/{{ADDRESS}}/g, subjects[d].account_number);
                account = account.replace(/{{PHONE}}/g, subjects[d].account_number);
                account = account.replace(/{{FUNDSOURCE}}/g, subjects[d].account_number);

                accountsMarkup += account;
        }

        accountsTemplate = accountsTemplate.replace(/{{ACCOUNTLIST}}/, accountsMarkup);

        jQuery('.main-block .accounts-container').empty();
        jQuery('.main-block .accounts-container').append(accountsTemplate);
    }

    function triggerNotification() {
        jQuery('.notifications').addClass('active');
        jQuery('.notifications').attr('data-notification-count', 1);
    };

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
