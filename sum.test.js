test("mock implementation of a basic function", () => {
    const mock = jest.fn(x => x + 42)
    expect(mock(1)).toBe(43)
    expect(mock).toHaveBeenCalledWith(1)
})