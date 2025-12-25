export const endpoints = {
    auth: {
        login: '/api/react/authenticate/login',
        logout: '/api/react/authenticate/logout',
        me: '/api/react/authenticate/show'
    },
    incomes: {
        list: '/api/v2/incomes',
        add: '/api/v2/incomes/add',
        update: '/api/v2/incomes/update',
        delete: '/api/v2/incomes/delete'
    },
    expenses: {
        list: '/api/v2/expenses',
        add: '/api/v2/expenses/add',
        update: '/api/v2/expenses/update',
        delete: '/api/v2/expenses/delete'
    },
    reports: {
        list: '/api/v2/reports',
        details: '/api/v2/reports/details'
    }
};
