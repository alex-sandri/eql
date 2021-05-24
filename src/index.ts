import aliases from "./config/aliases";

/**
 * 
 * @param query `EQL` query
 * @returns `SQL` query
 */
export const eql = (query: string): string =>
{
    aliases.forEach(alias =>
    {
        query = query.replace(
            new RegExp(`${alias.__?.escape ? "\\" : ""}${alias.eql}`, "gu"),
            alias.sql,
        );
    });

    return query;
}
