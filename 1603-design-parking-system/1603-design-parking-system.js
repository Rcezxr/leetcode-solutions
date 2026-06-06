// ============================================
// Problema: Design Parking System
// Nível: Easy
// Link: https://leetcode.com/problems/design-parking-system
// Data: 06/06/2026
// ============================================

// O que aprendi:
// - Usar objeto no construtor evita if repetidos
// - Busca em objeto é mais eficiente que múltiplos ifs
// - JavaScript é case sensitive — addCar é diferente de addcar
// - Encapsulamento com this._spaces

// Runtime: 15ms — faster than 69.84%

class ParkingSystem {
    constructor(big, medium, small){
    this._spaces = {
        1: big,
        2: medium,
        3: small
    };
    }
    
    addCar (carType){
        if(this._spaces[carType] > 0){
                this._spaces[carType]--;
                return true;
            }
            return false;
        }
}

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/leethub-v4/bcilpkkbokcopmabingnndookdogmbna
