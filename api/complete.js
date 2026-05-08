export default async function handler(req, res) {
  res.status(200).json({
    click_trans_id: req.body?.click_trans_id || 0,
    merchant_trans_id: req.body?.merchant_trans_id || 0,
    merchant_confirm_id: Date.now(),
    error: 0,
    error_note: "Success"
  });
}
