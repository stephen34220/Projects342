const information = {
    vehicle_brand: ["Toyota","camry","tesla","ford mustang","honda civic","chevrolet impala","nissan altima","jeep wrangler","subaru outback","volkswagen golf","bmw 3 series","audi a4","mercedes-benz c-class","lexus es","infiniti q50","acura tlx","volvo s60","kia optima","hyundai sonata","buick regal","mazda 6"],
    discount_applied: 0,
    total_amount_due: 0,
    discount_percentage: [1,5,7,10,15,17,20,25,30,35,40,45,50,55,60,65,70,85,87,90],
    parking_fee_per_hour: 0,
    has_valid_membership: [false, true], 
    Membership_type: ["Basic", "Premium", "VIP","Elite","Platinum", "Diamond", "Gold", "Silver", "Bronze", "Standard", "Exclusive", "Ultimate", "Pro", "Advanced", "Elite Plus", "VIP Plus", "Premium Plus", "Luxury", "Prestige", "Executive"],
};
let Vehicle_brand = information.vehicle_brand[Math.floor(Math.random() * information.vehicle_brand.length)];
let hours_parked = Math.floor(Math.random() * 24) + 1;
let discount_percentage = information.discount_percentage[Math.floor(Math.random() * information.discount_percentage.length)];
let parking_fee_per_hour = "$" + information.parking_fee_per_hour;
if (Vehicle_brand < information.vehicle_brand.slice(0, 7)) {
    parking_fee_per_hour = "$1000";
} else if (Vehicle_brand < information.vehicle_brand.slice(7, 14)) {
    parking_fee_per_hour = "$750";
} else if (Vehicle_brand < information.vehicle_brand.slice(14, 21)) {
    parking_fee_per_hour = "$500";
} else {
    parking_fee_per_hour = "$250";
}
let subtotal_before_discount = "$" + (hours_parked * (Math.floor(parseInt(parking_fee_per_hour.slice(1)))));
let discount_applied ="$" +((discount_percentage / 100)) * parseInt(Math.floor(subtotal_before_discount.slice(1)));
let has_valid_membership = information.has_valid_membership[Math.floor(Math.random() * information.has_valid_membership.length)];
let membership_type = information.Membership_type[Math.floor(Math.random() * information.Membership_type.length)];
if (has_valid_membership === true && membership_type === discount_percentage) {
    discount_percentage =  discount_percentage +"%";
}else if (has_valid_membership === true && membership_type !== discount_percentage) {
    discount_percentage =  discount_percentage +"%";
}else{
    discount_percentage = `No discount applied`;
}
if(has_valid_membership === true){
    membership_type = membership_type;
}else if(has_valid_membership === false){
    membership_type = `No membership`;
}
let total_amount_due = "$" + Math.floor((parseInt(subtotal_before_discount.slice(1))) - (parseInt(subtotal_before_discount.slice(1)) * (parseInt(discount_percentage.slice(0, -1)) / 100)));
if(hours_parked>1){
    hours_parked = hours_parked + " hrs";
}else{
    hours_parked = hours_parked + " hr";
}
if(has_valid_membership === false){
    total_amount_due = subtotal_before_discount;
}
if(discount_percentage === `No discount applied`){
    discount_applied = "$0";
}
console.log(`
              VEHICLE PARKING SYSTEM
    Vehicle Brand:                      ${Vehicle_brand}
    Hours Parked:                       ${hours_parked}
    Subtotal Before Discount:           ${subtotal_before_discount}
    Discount Applied:                   ${discount_applied}
    Total Amount Due:                   ${total_amount_due}
    Discount Percentage:                ${discount_percentage}
    Parking Fee Per Hour:               ${parking_fee_per_hour}
    Has Valid Membership:               ${has_valid_membership}
    Membership Type:                    ${membership_type}
    `)