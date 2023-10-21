-- For this challenge you need to create a simple DISTINCT statement, you want to find all the unique ages.
-- people table schema
--     id
--     name
--     age
-- select table schema
--     age (distinct)

-- given a table of people, with columns id name and age
-- output ages of people with no duplicate ages

SELECT DISTINCT age FROM people;
