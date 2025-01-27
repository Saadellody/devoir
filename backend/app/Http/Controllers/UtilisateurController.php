<?php

namespace App\Http\Controllers;

use App\Models\Utilisateurs;
use Illuminate\Http\Request;

class UtilisateurController extends Controller
{
    public function index()
    {
        $utilisateurs = Utilisateurs::all();
        if (is_null($utilisateurs)) {
            return response()->json('Aucun utilisateur trouvé', 404);
        }
        return response()->json($utilisateurs);
    }

    public function store(Request $request)
    {
        $utilisateur = Utilisateurs::create($request->all());
        return response()->json($utilisateur, 201);
    }

    public function show($id)
    {
        $utilisateur = Utilisateurs::find($id);
        if (is_null($utilisateur)) {
            return response()->json('Utilisateur not found', 404);
        }
        return response()->json($utilisateur);
    }

    public function update(Request $request, $id)
    {
        $utilisateur = Utilisateurs::find($id);
        $utilisateur->update($request->all());
        return response()->json($utilisateur, 200);
    }

    public function delete($id)
    {
        $utilisateur = Utilisateurs::find($id);
        $utilisateur->delete();
        return response()->json("Utilisateur supprimé avec succé", 204);
    }
}