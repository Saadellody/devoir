<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Faker\Factory;
use App\Models\Utilisateurs;

class UtilisateurSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Factory::create('fr_FR');
        for ($i = 0; $i < 20; $i++) {
            Utilisateurs::create([
                'nom' => $faker->firstName,
                'prenom' => $faker->lastName,
                'email' => $faker->email,
                'password' => 'password',
                'telephone' => $faker->e164PhoneNumber,
                'sexe' => $faker->randomElement(['male', 'female']),
                'nationalite' => $faker->country,
                'photo' => 'https://via.placeholder.com/360x360.png',
                'role' => 'user',
                'adresse' => $faker->address,
                'ville' => $faker->city,
            ]);
        }
    }
}
