import os
from flask import Flask, jsonify, request
from flask_cors import CORS
from pymongo import MongoClient
from bson import json_util,ObjectId
from dotenv import load_dotenv
load_dotenv()

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:5173"}})
mongo_uri = os.getenv("MONGO_URI")

if mongo_uri:
    mongo = MongoClient(mongo_uri)
    db = mongo.get_database("video")
else:
    raise ValueError("MONGO_URI environment variable is not set!")


@app.route('/api/overlaySettings', methods=['POST'])
def create_overlay_setting():
    new_overlay = request.json
    db.overlay_settings.insert_one(new_overlay)
    return jsonify({'message': 'Overlay setting created successfully'}), 201

@app.route('/api/overlaySettings', methods=['GET'])
def get_overlay_settings():
    overlay_settings = db.overlay_settings.find({})
    overlay_settings_with_str_ids = [
        {**overlay, '_id': str(overlay['_id'])} for overlay in overlay_settings
    ]
    return jsonify(overlay_settings_with_str_ids), 200

@app.route('/api/overlaySettings/<string:id>', methods=['PUT'])
def update_overlay_setting(id):
    updated_overlay = request.json
    print(updated_overlay)
    result = db.overlay_settings.update_one({'_id': ObjectId(id)}, {'$set': updated_overlay})
    if result.modified_count > 0:
        return jsonify({'message': 'Overlay setting updated successfully'}), 200
    else:
        return jsonify({'message': 'Overlay setting not found'}), 404

@app.route('/api/overlaySettings/<string:id>', methods=['DELETE'])
def delete_overlay_setting(id):
    print(ObjectId(id))
    result = db.overlay_settings.delete_one({'_id': ObjectId(id)})
    if result.deleted_count > 0:
        return jsonify({'message': 'Overlay setting deleted successfully'}), 200
    else:
        return jsonify({'message': 'Overlay setting not found'}), 404


if __name__ == '__main__':
    app.run(debug=True)
