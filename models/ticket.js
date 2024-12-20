const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
    customer_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer', required: true },
    showtime_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Showtime', required: true },
    seat_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Seat', required: true },
    price: { type: Number, required: true },
    booking_date: { type: Date, default: Date.now },
    payment_status: { type: String, default: 'pending' } // pending, paid, etc.
});

module.exports = mongoose.model('Ticket', ticketSchema);