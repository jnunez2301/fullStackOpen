const reverse = require('./for_testing').reverse;

test('reverse of a', () => {
    const result = reverse('a');

    expect(result).toBe('a');
});

test('reverse of react', () =>{
    const result = reverse('react');
    
    expect(result).toBe('tcaer');
})

test('reverse of releveler', () => {
    const result = reverse('radar');

    expect(result).toBe('radar');
});

test('palindrome of react', () => {
    expect(reverse('react')).toBe('tcaer');
})