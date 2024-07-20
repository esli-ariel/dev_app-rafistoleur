<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function login(Request $request) {
        $user = User::where('email', $request->email)->first();
        if ($user && Hash::check($request->password, $user->password)) {
            return response()->json(['success' => true, 'user' => $user], 200);
        }
        return response()->json(['success' => false, 'message' => 'Invalid credentials'], 401);
    }

    public function register(Request $request) {
        $user = new User();
        $user->name = $request->name;
        $user->first_name = $request->first_name;
        $user->contact = $request->contact;
        $user->email = $request->email;
        $user->address = $request->address;
        $user->password = Hash::make($request->password);
        $user->role = $request->role; // Assigner le rôle à l'utilisateur
        $user->save();
        return response()->json(['success' => true, 'user' => $user], 201);
    }
}
