<?php


namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class TailorController extends Controller
{
    public function index() {
        return User::where('role', 'tailor')->get();
    }
}
