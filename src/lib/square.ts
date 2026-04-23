/**
 * Square Web Payments SDK integration stub.
 *
 * When your Square credentials arrive, follow these steps:
 *
 * 1. Add to .env.local:
 *      NEXT_PUBLIC_SQUARE_APP_ID=your_app_id
 *      NEXT_PUBLIC_SQUARE_LOCATION_ID=your_location_id
 *
 * 2. Load the Square Web Payments SDK script in layout.tsx:
 *      <Script src="https://sandbox.web.squarecdn.com/v1/square.js" strategy="beforeInteractive" />
 *      (use https://web.squarecdn.com/v1/square.js for production)
 *
 * 3. Replace the function bodies below with real SDK calls.
 *    The checkout page already imports and calls these — no other file needs to change.
 */

export interface SquarePaymentResult {
  token: string;
  details: Record<string, unknown>;
}

export async function initializeSquarePayments(containerId: string): Promise<void> {
  // TODO: Replace with real implementation when credentials are available.
  //
  // const payments = window.Square.payments(
  //   process.env.NEXT_PUBLIC_SQUARE_APP_ID!,
  //   process.env.NEXT_PUBLIC_SQUARE_LOCATION_ID!
  // );
  // const card = await payments.card();
  // await card.attach(`#${containerId}`);
  console.log(`[Square stub] initializeSquarePayments called for #${containerId}`);
}

export async function tokenizeCard(): Promise<SquarePaymentResult | null> {
  // TODO: Replace with real implementation when credentials are available.
  //
  // const result = await card.tokenize();
  // if (result.status === 'OK') {
  //   return { token: result.token!, details: result.details ?? {} };
  // }
  // throw new Error(result.errors?.[0]?.message ?? 'Tokenization failed');
  console.log("[Square stub] tokenizeCard called — not yet implemented");
  return null;
}
