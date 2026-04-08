const { addTask } = require('./app');

test("Add task should increase length", () => {
    let result = addTask("Test Task");
    expect(result.length).toBeGreaterThan(0);
});