import express from 'express'
import { placeOrder, placeOrderRazorpay, placeOrderStripe, allorders, userOrders, updateStatus, verifyStripe, verifyRazorpay } from '../controllers/orderController.js'
import adminAuth from '../middleware/adminAuth.js'
import authUser from '../middleware/auth.js'

const orderRouter = express.Router()

orderRouter.post('/list', adminAuth, allorders)
orderRouter.post('/status', adminAuth, updateStatus)

orderRouter.post('/place', authUser, placeOrder)
orderRouter.post('/stripe', authUser, placeOrderStripe)
orderRouter.post('/razorpay', authUser, placeOrderRazorpay)

orderRouter.post('/userorders', authUser, userOrders)
orderRouter.post('/verifyStripe', authUser, verifyStripe)
orderRouter.post('/verifyRazorpay', authUser, verifyRazorpay)

export default orderRouter