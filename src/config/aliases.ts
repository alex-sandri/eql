export default [
    /*
        STATEMENTS
    */

    {
        eql: "🔍",
        sql: "select",
    },
    {
        eql: "➕",
        sql: "insert",
    },
    {
        eql: "✏️",
        sql: "update",
    },
    {
        eql: "❌",
        sql: "delete",
    },

    /*
        CLAUSES
    */

    {
        eql: "📋",
        sql: "from",
    },

    /*
        MISC
    */

    {
        eql: "*️⃣",
        sql: "*",
        __: {
            escape: true,
        },
    },
];