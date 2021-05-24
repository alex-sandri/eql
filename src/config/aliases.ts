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
        sql: "insert into",
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
    {
        eql: "🛃",
        sql: "where",
    },
    {
        eql: "✍️",
        sql: "set",
    },
    {
        eql: "💾",
        sql: "values",
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