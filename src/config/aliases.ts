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
        eql: "*️⃣",
        sql: "*",
        __: {
            escape: true,
        },
    },
    {
        eql: "📋",
        sql: "from",
    },
];