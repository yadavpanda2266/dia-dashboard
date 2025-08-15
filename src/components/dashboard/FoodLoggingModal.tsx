import { useState } from "react";
import { X, Search, Camera, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface FoodItem {
  id: string;
  name: string;
  calories: number;
  carbs: number;
  protein: number;
  fat: number;
  glycemicIndex?: number;
}

interface FoodLoggingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogFood: (food: FoodItem, quantity: number) => void;
}

const sampleFoods: FoodItem[] = [
  { id: "1", name: "Brown Rice", calories: 216, carbs: 45, protein: 5, fat: 2, glycemicIndex: 55 },
  { id: "2", name: "Chicken Breast", calories: 165, carbs: 0, protein: 31, fat: 3.6 },
  { id: "3", name: "Broccoli", calories: 55, carbs: 11, protein: 3.7, fat: 0.6, glycemicIndex: 15 },
  { id: "4", name: "Sweet Potato", calories: 103, carbs: 24, protein: 2, fat: 0.2, glycemicIndex: 44 },
  { id: "5", name: "Greek Yogurt", calories: 59, carbs: 3.6, protein: 10, fat: 0.4 },
  { id: "6", name: "Quinoa", calories: 222, carbs: 39, protein: 8, fat: 4, glycemicIndex: 53 }
];

export function FoodLoggingModal({ isOpen, onClose, onLogFood }: FoodLoggingModalProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFood, setSelectedFood] = useState<FoodItem | null>(null);
  const [quantity, setQuantity] = useState(1);

  const filteredFoods = sampleFoods.filter(food =>
    food.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleLogFood = () => {
    if (selectedFood) {
      onLogFood(selectedFood, quantity);
      setSelectedFood(null);
      setQuantity(1);
      onClose();
    }
  };

  if (!isOpen) return null;

     return (
     <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-2 md:p-4">
       <Card className="w-full max-w-2xl max-h-[90vh] md:max-h-[80vh] overflow-hidden">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
          <CardTitle className="text-xl font-semibold text-blue-900">Log Food Intake</CardTitle>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="w-4 h-4" />
          </Button>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search for food items..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Quick Actions */}
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="flex items-center gap-2">
              <Camera className="w-4 h-4" />
              Scan Barcode
            </Button>
            <Button variant="outline" size="sm" className="flex items-center gap-2">
              <Plus className="w-4 h-4" />
              Add Custom Food
            </Button>
          </div>

          {/* Food List */}
          <div className="max-h-60 overflow-y-auto space-y-2">
            {filteredFoods.map((food) => (
              <div
                key={food.id}
                className={`p-3 rounded-lg border cursor-pointer transition-colors ${
                  selectedFood?.id === food.id
                    ? "border-blue-300 bg-blue-50"
                    : "border-gray-200 hover:border-blue-200 hover:bg-blue-50/50"
                }`}
                onClick={() => setSelectedFood(food)}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <div className="font-medium text-gray-900">{food.name}</div>
                    <div className="text-sm text-gray-600">
                      {food.calories} cal • {food.carbs}g carbs • {food.protein}g protein • {food.fat}g fat
                    </div>
                  </div>
                  {food.glycemicIndex && (
                    <Badge variant="outline" className="text-xs">
                      GI: {food.glycemicIndex}
                    </Badge>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Selected Food Details */}
          {selectedFood && (
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h4 className="font-semibold text-blue-900">{selectedFood.name}</h4>
                  <p className="text-sm text-blue-700">
                    {selectedFood.calories} calories per serving
                  </p>
                </div>
                {selectedFood.glycemicIndex && (
                  <Badge className="bg-blue-600 text-white">
                    Low GI ({selectedFood.glycemicIndex})
                  </Badge>
                )}
              </div>
              
              <div className="grid grid-cols-4 gap-4 mb-4">
                <div className="text-center">
                  <div className="text-lg font-bold text-blue-900">{selectedFood.carbs}g</div>
                  <div className="text-xs text-blue-600">Carbs</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-blue-900">{selectedFood.protein}g</div>
                  <div className="text-xs text-blue-600">Protein</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-blue-900">{selectedFood.fat}g</div>
                  <div className="text-xs text-blue-600">Fat</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-blue-900">{selectedFood.calories}</div>
                  <div className="text-xs text-blue-600">Calories</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <label className="text-sm font-medium text-blue-900">Quantity:</label>
                  <Input
                    type="number"
                    min="0.1"
                    step="0.1"
                    value={quantity}
                    onChange={(e) => setQuantity(parseFloat(e.target.value) || 1)}
                    className="w-20"
                  />
                  <span className="text-sm text-blue-600">servings</span>
                </div>
                <Button onClick={handleLogFood} className="bg-blue-600 hover:bg-blue-700">
                  Log Food
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
