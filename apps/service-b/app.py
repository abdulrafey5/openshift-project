from flask import Flask, jsonify
import socket, datetime
app = Flask(__name__)
@app.route('/health')
def health():
    return 'OK'
@app.route('/api')
def api():
    return jsonify(service='service-b', host=socket.gethostname(), time=str(datetime.datetime.utcnow()))
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8080)
