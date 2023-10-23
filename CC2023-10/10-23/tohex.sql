-- to hexYou have access to a table of monsters as follows:
-- monsters table schema
--     id
--     name
--     legs
--     arms
--     characteristics
-- Your task is to turn the numeric columns (arms, legs) into equivalent hexadecimal values.
-- output table schema
--     legs
--     arms

-- given a table of monsters with the columns id, name, legs, arms and characteristics
-- return a list of legs and arms converted to hex

SELECT TO_HEX(legs) as legs, TO_HEX(arms) as arms
FROM monsters;