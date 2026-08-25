// Car_parking_system.js
// Refactored, type-safe, and clearer implementation.

const information = {
  vehicleBrands: [
    "Toyota","Camry","Tesla","Ford Mustang","Honda Civic","Chevrolet Impala","Nissan Altima",
    "Jeep Wrangler","Subaru Outback","Volkswagen Golf","BMW 3 Series","Audi A4","Mercedes-Benz"
  ],
  // fallback discount percentages (if not using membership -> no discount)
  discountPercentages: [1, 5, 7, 10, 15, 17, 20, 25, 30],
  // membership types and their mapped discount percentages
  membershipDiscounts: {
    Basic: 5,
    Premium: 10,
    VIP: 20,
    Elite: 25,
    Platinum: 30
  }
};

function getRandomInt(min, max) {
  // inclusive
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function getRandomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}
function formatCurrency(amount) {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);
}

function getParkingFeePerHour(brand) {
  // Determine fee tier based on index in information.vehicleBrands
  const idx = information.vehicleBrands.indexOf(brand);
  if (idx === -1) {
    // Unknown brand -> default tier
    return 250;
  }
  if (idx < 7) return 1000;
  if (idx < 14) return 750;
  return 250;
}

// --- Simulate inputs (replace with real inputs if desired) ---
const vehicleBrand = getRandomItem(information.vehicleBrands);
const hoursParked = getRandomInt(1, 24);
const hasValidMembership = Math.random() < 0.5; // 50/50
const membershipType = hasValidMembership ? getRandomItem(Object.keys(information.membershipDiscounts)) : null;

// Determine fee and subtotal
const parkingFeePerHour = getParkingFeePerHour(vehicleBrand); // numeric
const subtotal = parkingFeePerHour * hoursParked;

// Determine discount
let discountPercentage = 0;
if (hasValidMembership && membershipType) {
  discountPercentage = information.membershipDiscounts[membershipType] ?? 0;
}

// If you want to allow random non-membership discounts, you could uncomment:
// if (!hasValidMembership) discountPercentage = getRandomItem(information.discountPercentages);

const discountAmount = Math.round(subtotal * (discountPercentage / 100) * 100) / 100;
const totalAmountDue = Math.round((subtotal - discountAmount) * 100) / 100;

// Helper for hours label
const hoursLabel = hoursParked === 1 ? `${hoursParked} hr` : `${hoursParked} hrs`;

// Output
console.log(`
              VEHICLE PARKING SYSTEM
    Vehicle Brand:           ${vehicleBrand}
    Hours Parked:            ${hoursLabel}
    Parking Fee / Hour:      ${formatCurrency(parkingFeePerHour)}
    Subtotal Before Discount:${formatCurrency(subtotal)}
    Discount Percentage:     ${discountPercentage}% 
    Discount Applied:        ${formatCurrency(discountAmount)}
    Total Amount Due:        ${formatCurrency(totalAmountDue)}
    Has Valid Membership:    ${hasValidMembership}
    Membership Type:         ${membershipType ?? 'No membership'}
`);