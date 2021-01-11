const logger = require('../lib/logger');
const requests = require('../lib/requests');

const token = 'eyJhbGciOiJSUzI1NiJ9.eyJqdGkiOiJiY2RjMjM3Yi1kYmNiLTRkOWUtOGQwMS1lZDhjYTZmOGQ4ZGYiLCJzdWIiOiJjMDRlNTY1ZS00N2Q0LTQwN2EtYmMxOC0xMmMwNmI4YzEzYTEiLCJzY29wZSI6WyJzY2ltLmVtYWlscy5yZWFkIiwic2NpbS5tZSIsIm9wZW5pZCIsInBhc3N3b3JkLndyaXRlIiwiYXBwcm92YWxzLm1lIiwic2NpbS5pZHMucmVhZCIsIm9hdXRoLmFwcHJvdmFscyJdLCJjbGllbnRfaWQiOiJlZGdlY2xpIiwiY2lkIjoiZWRnZWNsaSIsImF6cCI6ImVkZ2VjbGkiLCJncmFudF90eXBlIjoicGFzc3dvcmQiLCJ1c2VyX2lkIjoiYzA0ZTU2NWUtNDdkNC00MDdhLWJjMTgtMTJjMDZiOGMxM2ExIiwib3JpZ2luIjoidXNlcmdyaWQiLCJ1c2VyX25hbWUiOiJzaHV0b3ZhbmRyaWlAZ21haWwuY29tIiwiZW1haWwiOiJzaHV0b3ZhbmRyaWlAZ21haWwuY29tIiwiYXV0aF90aW1lIjoxNjEwMzIyMzY2LCJhbCI6MiwicmV2X3NpZyI6ImIzZWFlNGVkIiwiaWF0IjoxNjEwMzIyMzY2LCJleHAiOjE2MTAzNjU1NjYsImlzcyI6Imh0dHBzOi8vbG9naW4uYXBpZ2VlLmNvbSIsInppZCI6InVhYSIsImF1ZCI6WyJlZGdlY2xpIiwic2NpbS5lbWFpbHMiLCJzY2ltIiwib3BlbmlkIiwicGFzc3dvcmQiLCJhcHByb3ZhbHMiLCJzY2ltLmlkcyIsIm9hdXRoIl19.fhgv779OoQMSfUgn5TmuD81Q_Vlr1CQ5cEU9ILNwR_uaIHwGONtQBAaq7LXuldx723fiv7jtHj2GJHYDCI_fNo1ZNk7q_zzsMl9TkWG0ECEOHkzvazhOMCs1BnZKDBViyU2H5iJcgTZyCk5Qy5bJOVMaZW7nAPucrdzACZImvLhpCL5CXKNV7O1FG8J7w4VEoI6X8SDOvMU3SNR78FDv9zEUEAQYqZQ5XU7C7aQKQR6XedIPeb6IvSJ35kCi6CdQTlzbvb8qGh3w0XKSXYcvepejpMWESeOjjKCDJ0FEDDoCTKBVwOxfxtTqpC2N0K2-cA6EAKnb4QcvkjO-V415aQ';

exports.command = 'kvm-update <map> <key> <value>'
exports.desc = 'Update KVM value.'
exports.builder = {}
exports.handler = async function (argv) {
  logger.info(`Starting KVM update.`);
  try {
    const value = await requests.putKVMValueRequest(argv.map, argv.key, {"name": argv.key, "value": argv.value});
    logger.info(`Endpoint response ${JSON.stringify(value)}.`);
  }
  catch(error) {
    const msg = error.message || error.toString();
    logger.error(msg);
    process.exit(1);
  }
}