<?php


namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class UserController extends Controller
{
    public function index() {
        return User::all();
    }

    public function show($id) {
        return User::find($id);
    }

    public function update(Request $request, $id) {
        $user = User::find($id);
        $user->name = $request->name;
        $user->first_name = $request->first_name;
        $user->contact = $request->contact;
        $user->email = $request->email;
        $user->address = $request->address;
        if ($request->password) {
            $user->password = Hash::make($request->password);
        }
        $user->save();
        return response()->json(['success' => true, 'user' => $user], 200);
    }

    public function destroy($id) {
        User::destroy($id);
        return response()->json(['success' => true], 200);
    }
}
