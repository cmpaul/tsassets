
function triggerNotification() {
    var notificationCount;
    if(jQuery('.notifications').attr('data-notification-count') == "undefined" || jQuery('.notifications').attr('data-notification-count') == null) {
        notificationCount = 1;
    } else {

        notificationCount = parseInt(jQuery('.notifications').attr('data-notification-count'));
        notificationCount++;
    }
    jQuery('.notifications').addClass('active');
    jQuery('.notifications').attr('data-notification-count', notificationCount);
};

jQuery(document).ready(function () {
    var userAccount = {};
    var transactions = [];

    caseData = {}
    caseData.organization = "Global View Banking Company";
    caseData.rawData = "";

    caseData.transactions = [{
           "id": 'WIRE-20181013-249073523',
            "bank_id_std": "GVBCGB",
            "bank_name_std": "Global View Banking Company",
            "customer_id_std": 2000166633,
            "account_number_std": "GVBCGB00000000166976",
            "primary_source_of_funds_std": "Business Activity",
            "reference_number_std": "WIRE-20190525-593836587",
            "credit_debit_flag_std": "credit",
            "transaction_type_std": "wire_transfer",
            "originator_account_number_std": "SRBASG00000000459529",
            "originator_financial_institution_std": "SRBASG",
            "originator_financial_institution_name_std": "South Rivers Bank",
            "beneficiary_account_number_std": "GVBCGB00000000166976",
            "beneficiary_financial_institution_std": "GVBCGB",
            "beneficiary_financial_institution_name_std": "Global View Banking Corporation",
            "original_transaction_amount_std": 4581.58,
            "original_transaction_currency_std": "SGD"
        },
        {
           "id": 'WIRE-20181106-516528615',
           "bank_id_std": "GVBCGB",
           "bank_name_std": "Global View Banking Company",
           "customer_id_std": 2000166633,
           "account_number_std": "GVBCGB00000000166976",
           "primary_source_of_funds_std": "Business Activity",
           "reference_number_std": "WIRE-20190525-593836587",
           "credit_debit_flag_std": "credit",
           "transaction_type_std": "wire_transfer",
           "originator_account_number_std": "SRBASG00000000459529",
           "originator_financial_institution_std": "SRBASG",
           "originator_financial_institution_name_std": "South Rivers Bank",
           "beneficiary_account_number_std": "GVBCGB00000000166976",
           "beneficiary_financial_institution_std": "GVBCGB",
           "beneficiary_financial_institution_name_std": "Global View Banking Corporation",
           "original_transaction_amount_std": 4500.58,
           "original_transaction_currency_std": "SGD"
        },
        {
           "id": 'WIRE-20181113-603836835',
           "bank_id_std": "GVBCGB",
           "bank_name_std": "Global View Banking Company",
           "customer_id_std": 2000166633,
           "account_number_std": "GVBCGB00000000166976",
           "primary_source_of_funds_std": "Business Activity",
           "reference_number_std": "WIRE-20190525-593836587",
           "credit_debit_flag_std": "credit",
           "transaction_type_std": "wire_transfer",
           "originator_account_number_std": "SRBASG00000000459529",
           "originator_financial_institution_std": "SRBASG",
           "originator_financial_institution_name_std": "South Rivers Bank",
           "beneficiary_account_number_std": "GVBCGB00000000166976",
           "beneficiary_financial_institution_std": "GVBCGB",
           "beneficiary_financial_institution_name_std": "Global View Banking Corporation",
           "original_transaction_amount_std": 5000.76,
           "original_transaction_currency_std": "SGD"
        },
        {
           "id": 'WIRE-20181213-87124374',
           "bank_id_std": "GVBCGB",
           "bank_name_std": "Global View Banking Company",
           "customer_id_std": 2000166633,
           "account_number_std": "GVBCGB00000000166976",
           "primary_source_of_funds_std": "Business Activity",
           "reference_number_std": "WIRE-20190525-593836587",
           "credit_debit_flag_std": "credit",
           "transaction_type_std": "wire_transfer",
           "originator_account_number_std": "SRBASG00000000459529",
           "originator_financial_institution_std": "SRBASG",
           "originator_financial_institution_name_std": "South Rivers Bank",
           "beneficiary_account_number_std": "GVBCGB00000000166976",
           "beneficiary_financial_institution_std": "GVBCGB",
           "beneficiary_financial_institution_name_std": "Global View Banking Corporation",
           "original_transaction_amount_std": 3500.6,
           "original_transaction_currency_std": "SGD"
        },
        {
           "id": 'WIRE-20181121-860348753',
           "bank_id_std": "GVBCGB",
           "bank_name_std": "Global View Banking Company",
           "customer_id_std": 2000167682,
           "account_number_std": "GVBCGB00000000168025",
           "primary_source_of_funds_std": "Business Activity",
           "reference_number_std": "ACH-20190303-714775323",
           "credit_debit_flag_std": "credit",
           "transaction_type_std": "ach",
           "originator_account_number_std": "ASBGIE00000000810483",
           "originator_financial_institution_std": "ASBGIE",
           "originator_financial_institution_name_std": "Altantic Seaboard Banking Group",
           "beneficiary_account_number_std": "GVBCGB00000000168025",
           "beneficiary_financial_institution_std": "GVBCGB",
           "beneficiary_financial_institution_name_std": "Global View Banking Corporation",
           "original_transaction_amount_std": 1897.92,
           "original_transaction_currency_std": "EUR"
        },
        {
           "id": 'WIRE-20181208-427433102',
           "bank_id_std": "GVBCGB",
           "bank_name_std": "Global View Banking Company",
           "customer_id_std": 2000167682,
           "account_number_std": "GVBCGB00000000168025",
           "primary_source_of_funds_std": "Business Activity",
           "reference_number_std": "ACH-20190303-714775323",
           "credit_debit_flag_std": "credit",
           "transaction_type_std": "ach",
           "originator_account_number_std": "ASBGIE00000000810483",
           "originator_financial_institution_std": "ASBGIE",
           "originator_financial_institution_name_std": "Altantic Seaboard Banking Group",
           "beneficiary_account_number_std": "GVBCGB00000000168025",
           "beneficiary_financial_institution_std": "GVBCGB",
           "beneficiary_financial_institution_name_std": "Global View Banking Corporation",
           "original_transaction_amount_std": 650.92,
           "original_transaction_currency_std": "EUR"
        },
        {
           "id": 'WIRE-20181201-63290980',
           "bank_id_std": "GVBCGB",
           "bank_name_std": "Global View Banking Company",
           "customer_id_std": 2000167682,
           "account_number_std": "GVBCGB00000000168025",
           "primary_source_of_funds_std": "Business Activity",
           "reference_number_std": "ACH-20190303-714775323",
           "credit_debit_flag_std": "credit",
           "transaction_type_std": "ach",
           "originator_account_number_std": "ASBGIE00000000810483",
           "originator_financial_institution_std": "ASBGIE",
           "originator_financial_institution_name_std": "Altantic Seaboard Banking Group",
           "beneficiary_account_number_std": "GVBCGB00000000168025",
           "beneficiary_financial_institution_std": "GVBCGB",
           "beneficiary_financial_institution_name_std": "Global View Banking Corporation",
           "original_transaction_amount_std": 6547.92,
           "original_transaction_currency_std": "EUR"
        },
        {
            "id": 'WIRE-20181202-219510731',
           "bank_id_std": "GVBCGB",
           "bank_name_std": "Global View Banking Company",
           "customer_id_std": 2000167682,
           "account_number_std": "GVBCGB00000000168025",
           "primary_source_of_funds_std": "Business Activity",
           "reference_number_std": "ACH-20190303-714775323",
           "credit_debit_flag_std": "credit",
           "transaction_type_std": "ach",
           "originator_account_number_std": "ASBGIE00000000810483",
           "originator_financial_institution_std": "ASBGIE",
           "originator_financial_institution_name_std": "Altantic Seaboard Banking Group",
           "beneficiary_account_number_std": "GVBCGB00000000168025",
           "beneficiary_financial_institution_std": "GVBCGB",
           "beneficiary_financial_institution_name_std": "Global View Banking Corporation",
           "original_transaction_amount_std": 743.87,
           "original_transaction_currency_std": "EUR"
        },
        {
            "id": 'WIRE-20181202-219511234',
           "bank_id_std": "GVBCGB",
           "bank_name_std": "Global View Banking Company",
           "customer_id_std": 2000170094,
           "account_number_std": "GVBCGB00000000170437",
           "primary_source_of_funds_std": "Business Activity",
           "reference_number_std": "WIRE-20190325-838751407",
           "credit_debit_flag_std": "credit",
           "transaction_type_std": "wire_transfer",
           "originator_account_number_std": "BDEUDE00000000681949",
           "originator_financial_institution_std": "BDEUDE",
           "originator_financial_institution_name_std": "Bank de Europa",
           "beneficiary_account_number_std": "GVBCGB00000000170437",
           "beneficiary_financial_institution_std": "GVBCGB",
           "beneficiary_financial_institution_name_std": "Global View Banking Corporation",
           "original_transaction_amount_std": 6545.84,
           "original_transaction_currency_std": "EUR"
        },
        {
            "id": 'WIRE-20181202-32903409',
           "bank_id_std": "GVBCGB",
           "bank_name_std": "Global View Banking Company",
           "customer_id_std": 2000170094,
           "account_number_std": "GVBCGB00000000170437",
           "primary_source_of_funds_std": "Business Activity",
           "reference_number_std": "WIRE-20190325-838751407",
           "credit_debit_flag_std": "credit",
           "transaction_type_std": "wire_transfer",
           "originator_account_number_std": "BDEUDE00000000681949",
           "originator_financial_institution_std": "BDEUDE",
           "originator_financial_institution_name_std": "Bank de Europa",
           "beneficiary_account_number_std": "GVBCGB00000000170437",
           "beneficiary_financial_institution_std": "GVBCGB",
           "beneficiary_financial_institution_name_std": "Global View Banking Corporation",
           "original_transaction_amount_std": 4500.84,
           "original_transaction_currency_std": "EUR"
        },
        {
            "id": 'WIRE-20181202-21231234',
           "bank_id_std": "GVBCGB",
           "bank_name_std": "Global View Banking Company",
           "customer_id_std": 2000170094,
           "account_number_std": "GVBCGB00000000170437",
           "primary_source_of_funds_std": "Business Activity",
           "reference_number_std": "WIRE-20190325-838751407",
           "credit_debit_flag_std": "credit",
           "transaction_type_std": "wire_transfer",
           "originator_account_number_std": "BDEUDE00000000681949",
           "originator_financial_institution_std": "BDEUDE",
           "originator_financial_institution_name_std": "Bank de Europa",
           "beneficiary_account_number_std": "GVBCGB00000000170437",
           "beneficiary_financial_institution_std": "GVBCGB",
           "beneficiary_financial_institution_name_std": "Global View Banking Corporation",
           "original_transaction_amount_std": 3213.54,
           "original_transaction_currency_std": "EUR"
        },
        {
            "id": 'WIRE-20181202-7278098',
           "bank_id_std": "GVBCGB",
           "bank_name_std": "Global View Banking Company",
           "customer_id_std": 2000170094,
           "account_number_std": "GVBCGB00000000170437",
           "primary_source_of_funds_std": "Business Activity",
           "reference_number_std": "WIRE-20190325-838751407",
           "credit_debit_flag_std": "credit",
           "transaction_type_std": "wire_transfer",
           "originator_account_number_std": "BDEUDE00000000681949",
           "originator_financial_institution_std": "BDEUDE",
           "originator_financial_institution_name_std": "Bank de Europa",
           "beneficiary_account_number_std": "GVBCGB00000000170437",
           "beneficiary_financial_institution_std": "GVBCGB",
           "beneficiary_financial_institution_name_std": "Global View Banking Corporation",
           "original_transaction_amount_std": 543.85,
           "original_transaction_currency_std": "EUR"
        },
        {
            "id": 'WIRE-20181202-12039483',
           "bank_id_std": "GVBCGB",
           "bank_name_std": "Global View Banking Company",
           "customer_id_std": 2000171496,
           "account_number_std": "GVBCGB00000000171839",
           "primary_source_of_funds_std": "Business Activity",
           "reference_number_std": "ACH-20190509-599599594",
           "credit_debit_flag_std": "credit",
           "transaction_type_std": "ach",
           "originator_account_number_std": "CSBARU00000000186765",
           "originator_financial_institution_std": "CSBARU",
           "originator_financial_institution_name_std": "Central Steppes Bank",
           "beneficiary_account_number_std": "GVBCGB00000000171839",
           "beneficiary_financial_institution_std": "GVBCGB",
           "beneficiary_financial_institution_name_std": "Global View Banking Corporation",
           "original_transaction_amount_std": 24565.13,
           "original_transaction_currency_std": "RUB"
        },
        {
            "id": 'WIRE-20181202-129480983',
           "bank_id_std": "GVBCGB",
           "bank_name_std": "Global View Banking Company",
           "customer_id_std": 2000171496,
           "account_number_std": "GVBCGB00000000171839",
           "primary_source_of_funds_std": "Business Activity",
           "reference_number_std": "ACH-20190509-599599594",
           "credit_debit_flag_std": "credit",
           "transaction_type_std": "ach",
           "originator_account_number_std": "CSBARU00000000186765",
           "originator_financial_institution_std": "CSBARU",
           "originator_financial_institution_name_std": "Central Steppes Bank",
           "beneficiary_account_number_std": "GVBCGB00000000171839",
           "beneficiary_financial_institution_std": "GVBCGB",
           "beneficiary_financial_institution_name_std": "Global View Banking Corporation",
           "original_transaction_amount_std": 2432.65,
           "original_transaction_currency_std": "RUB"
        },
        {
            "id": 'WIRE-20181202-120398098',
           "bank_id_std": "GVBCGB",
           "bank_name_std": "Global View Banking Company",
           "customer_id_std": 2000171496,
           "account_number_std": "GVBCGB00000000171839",
           "primary_source_of_funds_std": "Business Activity",
           "reference_number_std": "ACH-20190509-599599594",
           "credit_debit_flag_std": "credit",
           "transaction_type_std": "ach",
           "originator_account_number_std": "CSBARU00000000186765",
           "originator_financial_institution_std": "CSBARU",
           "originator_financial_institution_name_std": "Central Steppes Bank",
           "beneficiary_account_number_std": "GVBCGB00000000171839",
           "beneficiary_financial_institution_std": "GVBCGB",
           "beneficiary_financial_institution_name_std": "Global View Banking Corporation",
           "original_transaction_amount_std": 6544.17,
           "original_transaction_currency_std": "RUB"
        },
        {
            "id": 'WIRE-20181202-98737632',
           "bank_id_std": "GVBCGB",
           "bank_name_std": "Global View Banking Company",
           "customer_id_std": 2000171496,
           "account_number_std": "GVBCGB00000000171839",
           "primary_source_of_funds_std": "Business Activity",
           "reference_number_std": "ACH-20190509-599599594",
           "credit_debit_flag_std": "credit",
           "transaction_type_std": "ach",
           "originator_account_number_std": "CSBARU00000000186765",
           "originator_financial_institution_std": "CSBARU",
           "originator_financial_institution_name_std": "Central Steppes Bank",
           "beneficiary_account_number_std": "GVBCGB00000000171839",
           "beneficiary_financial_institution_std": "GVBCGB",
           "beneficiary_financial_institution_name_std": "Global View Banking Corporation",
           "original_transaction_amount_std": 232.13,
           "original_transaction_currency_std": "RUB"
        }
     ];

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
    }).done(function (data) {
        caseData.rawData = data;
        var customers = [];
        for (d in data) {
            caseSubjects = caseData.subjects;
            for (c in caseSubjects) {
                if (data[d].full_name == caseSubjects[c]) {
                    customers.push(data[d]);
                }
            }
        }
        initBankName(caseData.organization);
        initSubjects(caseData.customers);
        console.log(customers);
    });

    // Subject Click

    jQuery('body').on('click', '.subject-list .subject', function () {
        jQuery('.subject-list .subject').removeClass('active');
        jQuery(this).addClass('active');
        resetUser();
        jQuery('.transaction-container ul.transaction-list').empty();
        jQuery('.transaction-container ul.transaction-list').append("<li class='spinner'><i class='fa fa-spinner fa-spin'></i>");
        if(jQuery('.transaction-container h3').length == 0) {
            jQuery('.transaction-container').prepend('<h3>Transactions</h3>');
        }
  
        
        var customerAccount = jQuery(this).attr('data-class-subject-name');
        var customerTransactions = caseData.transactions.filter(function(item) {
            return item.account_number_std == customerAccount;
        });


        setTimeout(function () {
            buildTransactions(customerTransactions, jQuery('.transaction-container ul.transaction-list'))
        }, 2000);

        //buildAccounts(accounts);
    });

    // Account Click

    jQuery('body').on('click', '.account-list .account', function () {
        jQuery('.account-list .account').removeClass('active');
        jQuery(this).addClass('active');
        userAccount.account = jQuery(this).attr('data-account-name');
        buttonState();
    });

    // Transaction Click

    jQuery('body').on('click', '.transaction-list .transaction', function () {
        jQuery(this).toggleClass('active');

        transactions = [];
        jQuery('.transaction-list .transaction.active').each(function () {
            var transactionName = jQuery(this).attr('data-transaction-id');
            transactions.push(transactionName);
        });

        transactionButtonState();
    });

    // Init Button Click

    jQuery('.main-block-init-button').on('click', function () {
        if (jQuery(this).attr('disabled') == null || jQuery(this).attr('disabled') == undefined) {
            var transactions = [];

            jQuery('.transaction-list .transaction.active').each(function() {
                var id = jQuery(this).attr('data-transaction-id');
                transactions.push(id);
            });

            window.location.href = "/responses.html?ids=" + transactions.join(',');
        }
    })

    function buttonState() {
        if (userAccount.account != null && userAccount.account.length > 0 && userAccount.user != null && userAccount.user.length > 0) {
            jQuery('.main-block-init-button').removeAttr('disabled');
        }
    }

    function initSubjects(customers) {
        jQuery('.subject-list ul').empty();

        for (c in customers) {
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
        if (transactions.length > 0) {
            jQuery('.main-block .main-block-init-button').removeAttr('disabled');
        } else {
            jQuery('.main-block .main-block-init-button').attr('disabled', 'disabled');
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
        for (d in subjects) {
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

    function buildTransactions(data, target) {
        target.empty()
        for (d in data) {
            var transactionTemplate = '<li class="transaction" data-transaction-id="{{ID}}"> \
                                                <div class="row"> \
                                                    <div class="col-xs-5 account-numb"> \
                                                        Acct Number:{{ACCTNUMBER}} \
                                                    </div> \
                                                    <div class="col-xs-5 transaction-type"> \
                                                        Transaction Type:{{TRANSACTIONTYPE}} \
                                                    </div> \
                                                    <div class="col-xs-5 orig-acct-numb"> \
                                                    Originator Acct Number:{{ORIGACCTNUMB}} \
                                                    </div> \
                                                    <div class="col-xs-5 orig-financial-institution"> \
                                                    Originator Fin Inst:{{ORIGINFININST}} \
                                                    </div> \
                                                    <div class="col-xs-5 beneficiary-acct-numb"> \
                                                    Beneficiary Acct Number:{{BENEACCTNUMB}} \
                                                    </div> \
                                                    <div class="col-xs-5 bene-financial-institution"> \
                                                        Bene Fin Inst:{{BENEFININST}} \
                                                    </div> \
                                                    <div class="col-xs-5 orig-tranx-amt"> \
                                                        Orignator Tranx Amt:{{ORIGINTRXNAMT}} \
                                                    </div> \
                                                </div> \
                                    </li>';
            transactionTemplate = transactionTemplate.replace(/{{ID}}/g, data[d].id);
            transactionTemplate = transactionTemplate.replace(/{{ACCTNUMBER}}/g, data[d].account_number_std);
            transactionTemplate = transactionTemplate.replace(/{{TRANSACTIONTYPE}}/, data[d].credit_debit_flag_std);
            transactionTemplate = transactionTemplate.replace(/{{ORIGACCTNUMB}}/, data[d].originator_account_number_std);
            transactionTemplate = transactionTemplate.replace(/{{ORIGINFININST}}/, data[d].originator_financial_institution_std);
            transactionTemplate = transactionTemplate.replace(/{{BENEACCTNUMB}}/, data[d].beneficiary_account_number_std);
            transactionTemplate = transactionTemplate.replace(/{{BENEFININST}}/, data[d].beneficiary_financial_institution_std);
            transactionTemplate = transactionTemplate.replace(/{{ORIGINTRXNAMT}}/, data[d].original_transaction_amount_std);
            target.append(transactionTemplate);
        }
    }
})
