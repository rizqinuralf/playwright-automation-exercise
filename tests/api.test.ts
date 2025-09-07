
import { test, expect } from '@playwright/test';

test.describe('API Tests', () => {
  test('Get all products', async ({ request }) => {
    const response = await request.get('/api/productsList');
    expect(response.status()).toBe(200);
    const responseBody = await response.json();
    console.log(responseBody.products);
    expect(responseBody).toHaveProperty('products');
    expect(Array.isArray(responseBody.products)).toBe(true);
  });
});
