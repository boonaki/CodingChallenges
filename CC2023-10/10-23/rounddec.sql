-- Given the following table 'decimals':
-- ** decimals table schema **
--     id
--     number1
--     number2
-- Return a table with two columns (number1, number2), the value in number1 should be rounded down and the value in number2 should be rounded up.

-- given a decimals table with the columns id, number1 and number2
-- return a table with number1 rounded down and number2 rounded up

SELECT FLOOR(number1) as number1, CEILING(number2) as number2
FROM decimals;