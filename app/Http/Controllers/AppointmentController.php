<?php


namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Appointment;

class AppointmentController extends Controller
{
    public function index() {
        return Appointment::all();
    }

    public function store(Request $request) {
        $appointment = new Appointment();
        $appointment->client_id = $request->client_id;
        $appointment->tailor_id = $request->tailor_id;
        $appointment->status = $request->status;
        $appointment->save();
        return response()->json(['success' => true, 'appointment' => $appointment], 201);
    }

    public function update(Request $request, $id) {
        $appointment = Appointment::find($id);
        $appointment->status = $request->status;
        $appointment->save();
        return response()->json(['success' => true, 'appointment' => $appointment], 200);
    }

    public function destroy($id) {
        Appointment::destroy($id);
        return response()->json(['success' => true], 200);
    }
}
