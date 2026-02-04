// ==========================================
// 7-Day Meal Prep Application
// ==========================================

// ==========================================
// Recipe Database
// ==========================================

const recipesDatabase = [
  // Breakfast Recipes
  {
    id: 'breakfast-1',
    name: 'Avocado Toast with Eggs',
    category: 'breakfast',
    prepTime: 10,
    servings: 1,
    calories: 420,
    protein: 18,
    carbs: 35,
    fat: 24,
    ingredients: [
      '2 slices whole grain bread',
      '1 ripe avocado',
      '2 eggs',
      '1 tsp olive oil',
      'Salt and pepper to taste',
      'Red pepper flakes (optional)'
    ],
    instructions: [
      'Toast the bread slices until golden',
      'Mash avocado with salt and pepper',
      'Cook eggs to your preference',
      'Spread avocado on toast, top with eggs',
      'Garnish with red pepper flakes'
    ]
  },
  {
    id: 'breakfast-2',
    name: 'Greek Yogurt Parfait',
    category: 'breakfast',
    prepTime: 5,
    servings: 1,
    calories: 320,
    protein: 22,
    carbs: 42,
    fat: 8,
    ingredients: [
      '1 cup Greek yogurt',
      '1/2 cup granola',
      '1/2 cup mixed berries',
      '1 tbsp honey',
      '1 tbsp chia seeds'
    ],
    instructions: [
      'Layer yogurt in a glass or bowl',
      'Add granola and berries',
      'Drizzle with honey',
      'Sprinkle chia seeds on top',
      'Serve immediately or refrigerate'
    ]
  },
  {
    id: 'breakfast-3',
    name: 'Protein Pancakes',
    category: 'breakfast',
    prepTime: 15,
    servings: 2,
    calories: 380,
    protein: 28,
    carbs: 45,
    fat: 10,
    ingredients: [
      '1 cup oats',
      '2 eggs',
      '1 scoop protein powder',
      '1/2 cup milk',
      '1 banana',
      '1 tsp baking powder',
      'Maple syrup for serving'
    ],
    instructions: [
      'Blend all ingredients except syrup',
      'Heat a non-stick pan over medium heat',
      'Pour batter to form pancakes',
      'Cook until bubbles form, then flip',
      'Serve with maple syrup'
    ]
  },

  // Lunch Recipes
  {
    id: 'lunch-1',
    name: 'Grilled Chicken Salad',
    category: 'lunch',
    prepTime: 20,
    servings: 1,
    calories: 450,
    protein: 42,
    carbs: 28,
    fat: 18,
    ingredients: [
      '6 oz chicken breast',
      '4 cups mixed greens',
      '1/2 cup cherry tomatoes',
      '1/4 cucumber',
      '1/4 red onion',
      '2 tbsp olive oil',
      '1 tbsp balsamic vinegar',
      'Feta cheese (optional)'
    ],
    instructions: [
      'Season and grill chicken breast',
      'Chop vegetables',
      'Arrange greens on a plate',
      'Top with vegetables and sliced chicken',
      'Drizzle with oil and vinegar'
    ]
  },
  {
    id: 'lunch-2',
    name: 'Quinoa Buddha Bowl',
    category: 'lunch',
    prepTime: 25,
    servings: 2,
    calories: 520,
    protein: 18,
    carbs: 68,
    fat: 20,
    ingredients: [
      '1 cup quinoa',
      '1 can chickpeas',
      '2 cups kale',
      '1 sweet potato',
      '1 avocado',
      '2 tbsp tahini',
      '1 lemon',
      'Olive oil, salt, pepper'
    ],
    instructions: [
      'Cook quinoa according to package',
      'Roast chickpeas and sweet potato',
      'Massage kale with lemon juice',
      'Assemble bowl with all ingredients',
      'Drizzle with tahini dressing'
    ]
  },
  {
    id: 'lunch-3',
    name: 'Turkey Wrap',
    category: 'lunch',
    prepTime: 10,
    servings: 1,
    calories: 380,
    protein: 32,
    carbs: 38,
    fat: 12,
    ingredients: [
      '1 whole wheat tortilla',
      '4 oz turkey breast',
      '2 lettuce leaves',
      '2 tomato slices',
      '1/4 avocado',
      '1 tbsp hummus',
      'Mustard (optional)'
    ],
    instructions: [
      'Spread hummus on tortilla',
      'Layer turkey, lettuce, and tomato',
      'Add sliced avocado',
      'Add mustard if desired',
      'Roll tightly and slice in half'
    ]
  },

  // Dinner Recipes
  {
    id: 'dinner-1',
    name: 'Salmon with Roasted Vegetables',
    category: 'dinner',
    prepTime: 30,
    servings: 2,
    calories: 580,
    protein: 45,
    carbs: 32,
    fat: 28,
    ingredients: [
      '2 salmon fillets (6 oz each)',
      '2 cups broccoli florets',
      '1 bell pepper',
      '1 zucchini',
      '3 tbsp olive oil',
      '2 garlic cloves',
      'Lemon wedges',
      'Fresh herbs, salt, pepper'
    ],
    instructions: [
      'Preheat oven to 400°F',
      'Toss vegetables with oil and seasonings',
      'Roast vegetables for 15 minutes',
      'Add seasoned salmon to baking sheet',
      'Bake for 12-15 minutes until cooked through'
    ]
  },
  {
    id: 'dinner-2',
    name: 'Chicken Stir Fry',
    category: 'dinner',
    prepTime: 25,
    servings: 3,
    calories: 480,
    protein: 38,
    carbs: 52,
    fat: 14,
    ingredients: [
      '1 lb chicken breast',
      '2 cups mixed vegetables',
      '1 cup brown rice',
      '3 tbsp soy sauce',
      '2 tbsp sesame oil',
      '2 garlic cloves',
      '1 inch ginger',
      'Green onions for garnish'
    ],
    instructions: [
      'Cook brown rice according to package',
      'Dice chicken and season',
      'Stir fry chicken in sesame oil',
      'Add vegetables and aromatics',
      'Add soy sauce and serve over rice'
    ]
  },
  {
    id: 'dinner-3',
    name: 'Spaghetti Bolognese',
    category: 'dinner',
    prepTime: 35,
    servings: 4,
    calories: 620,
    protein: 32,
    carbs: 75,
    fat: 20,
    ingredients: [
      '1 lb ground beef',
      '12 oz spaghetti',
      '1 can crushed tomatoes',
      '1 onion',
      '2 garlic cloves',
      '2 tbsp tomato paste',
      'Italian herbs',
      'Parmesan cheese',
      'Olive oil'
    ],
    instructions: [
      'Cook spaghetti according to package',
      'Brown ground beef with onion and garlic',
      'Add tomatoes, paste, and herbs',
      'Simmer sauce for 20 minutes',
      'Serve over spaghetti with parmesan'
    ]
  },
  {
    id: 'dinner-4',
    name: 'Veggie Tacos',
    category: 'dinner',
    prepTime: 20,
    servings: 2,
    calories: 420,
    protein: 15,
    carbs: 58,
    fat: 16,
    ingredients: [
      '6 corn tortillas',
      '1 can black beans',
      '1 bell pepper',
      '1 onion',
      '1 avocado',
      '1/2 cup corn',
      'Salsa',
      'Lime',
      'Cilantro',
      'Taco seasoning'
    ],
    instructions: [
      'Sauté peppers and onions',
      'Add black beans, corn, and seasoning',
      'Warm tortillas',
      'Fill with veggie mixture',
      'Top with avocado, salsa, and cilantro'
    ]
  },

  // Snacks
  {
    id: 'snack-1',
    name: 'Protein Smoothie',
    category: 'snack',
    prepTime: 5,
    servings: 1,
    calories: 280,
    protein: 25,
    carbs: 35,
    fat: 6,
    ingredients: [
      '1 scoop protein powder',
      '1 banana',
      '1 cup almond milk',
      '1 tbsp peanut butter',
      '1/2 cup ice',
      'Cinnamon (optional)'
    ],
    instructions: [
      'Add all ingredients to blender',
      'Blend until smooth',
      'Pour into glass',
      'Enjoy immediately'
    ]
  },
  {
    id: 'snack-2',
    name: 'Hummus & Veggies',
    category: 'snack',
    prepTime: 5,
    servings: 1,
    calories: 180,
    protein: 7,
    carbs: 22,
    fat: 8,
    ingredients: [
      '1/2 cup hummus',
      '1 cup carrot sticks',
      '1 cup cucumber slices',
      '1/2 bell pepper sliced'
    ],
    instructions: [
      'Slice vegetables',
      'Arrange on plate with hummus',
      'Enjoy as a snack'
    ]
  },
  {
    id: 'snack-3',
    name: 'Trail Mix',
    category: 'snack',
    prepTime: 2,
    servings: 1,
    calories: 240,
    protein: 8,
    carbs: 28,
    fat: 12,
    ingredients: [
      '1/4 cup almonds',
      '1/4 cup walnuts',
      '2 tbsp dried cranberries',
      '2 tbsp dark chocolate chips'
    ],
    instructions: [
      'Mix all ingredients',
      'Store in airtight container',
      'Enjoy as needed'
    ]
  }
];

// ==========================================
// State Management
// ==========================================

let state = {
  recipes: recipesDatabase,
  mealPlan: {
    monday: [],
    tuesday: [],
    wednesday: [],
    thursday: [],
    friday: [],
    saturday: [],
    sunday: []
  },
  currentFilter: 'all',
  searchQuery: '',
  theme: 'dark'
};

// ==========================================
// Initialization
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
  loadStateFromStorage();
  initializeTheme();
  renderCalendar();
  renderRecipes();
  renderShoppingList();
  attachEventListeners();
});

// ==========================================
// Local Storage Functions
// ==========================================

function saveStateToStorage() {
  try {
    localStorage.setItem('mealPrepState', JSON.stringify(state));
    showNotification('✅ Meal plan saved!', 'success');
  } catch (error) {
    showNotification('❌ Failed to save', 'error');
    console.error('Save error:', error);
  }
}

function loadStateFromStorage() {
  try {
    const savedState = localStorage.getItem('mealPrepState');
    if (savedState) {
      const parsedState = JSON.parse(savedState);
      state.mealPlan = parsedState.mealPlan || state.mealPlan;
      state.theme = parsedState.theme || state.theme;
    }
  } catch (error) {
    console.error('Load error:', error);
  }
}

// ==========================================
// Theme Management
// ==========================================

function initializeTheme() {
  document.documentElement.setAttribute('data-theme', state.theme);
}

function toggleTheme() {
  state.theme = state.theme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', state.theme);
  saveStateToStorage();
}

// ==========================================
// Calendar Rendering
// ==========================================

const daysOfWeek = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
const dayLabels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

function renderCalendar() {
  const calendarGrid = document.getElementById('calendar-grid');
  calendarGrid.innerHTML = '';

  daysOfWeek.forEach((day, index) => {
    const dayColumn = createDayColumn(day, dayLabels[index]);
    calendarGrid.appendChild(dayColumn);
  });
}

function createDayColumn(day, label) {
  const column = document.createElement('div');
  column.className = 'day-column';
  column.dataset.day = day;
  
  // Day header
  const header = document.createElement('div');
  header.className = 'day-header';
  const dayName = document.createElement('div');
  dayName.className = 'day-name';
  dayName.textContent = label;
  header.appendChild(dayName);
  
  // Meals container
  const mealsContainer = document.createElement('div');
  mealsContainer.className = 'day-meals';
  mealsContainer.id = `meals-${day}`;
  
  // Render existing meals
  const meals = state.mealPlan[day] || [];
  if (meals.length === 0) {
    const emptySlot = document.createElement('div');
    emptySlot.className = 'empty-slot';
    emptySlot.textContent = 'Drag recipes here';
    mealsContainer.appendChild(emptySlot);
  } else {
    meals.forEach((meal, index) => {
      const mealSlot = createMealSlot(meal, day, index);
      mealsContainer.appendChild(mealSlot);
    });
  }
  
  column.appendChild(header);
  column.appendChild(mealsContainer);
  
  // Drag and drop events
  setupDropZone(column, day);
  
  return column;
}

function createMealSlot(recipe, day, index) {
  const slot = document.createElement('div');
  slot.className = 'meal-slot';
  slot.draggable = true;
  slot.dataset.recipeId = recipe.id;
  slot.dataset.day = day;
  slot.dataset.index = index;
  
  const mealTime = document.createElement('div');
  mealTime.className = 'meal-time';
  mealTime.textContent = recipe.category;
  
  const mealName = document.createElement('div');
  mealName.className = 'meal-name';
  mealName.textContent = recipe.name;
  
  const mealCalories = document.createElement('div');
  mealCalories.className = 'meal-calories';
  mealCalories.textContent = `${recipe.calories} cal`;
  
  const removeBtn = document.createElement('button');
  removeBtn.className = 'meal-remove';
  removeBtn.textContent = '✕';
  removeBtn.setAttribute('aria-label', `Remove ${recipe.name}`);
  removeBtn.onclick = (e) => {
    e.stopPropagation();
    removeMealFromPlan(day, index);
  };
  
  slot.appendChild(mealTime);
  slot.appendChild(mealName);
  slot.appendChild(mealCalories);
  slot.appendChild(removeBtn);
  
  // Drag events for meal slots
  slot.addEventListener('dragstart', handleMealDragStart);
  slot.addEventListener('dragend', handleDragEnd);
  
  return slot;
}

// ==========================================
// Recipe Rendering
// ==========================================

function renderRecipes() {
  const recipeList = document.getElementById('recipe-list');
  recipeList.innerHTML = '';
  
  const filteredRecipes = getFilteredRecipes();
  
  if (filteredRecipes.length === 0) {
    const emptyState = document.createElement('div');
    emptyState.className = 'empty-state';
    emptyState.innerHTML = '<p>No recipes found</p>';
    recipeList.appendChild(emptyState);
    return;
  }
  
  filteredRecipes.forEach(recipe => {
    const card = createRecipeCard(recipe);
    recipeList.appendChild(card);
  });
}

function getFilteredRecipes() {
  return state.recipes.filter(recipe => {
    const matchesFilter = state.currentFilter === 'all' || recipe.category === state.currentFilter;
    const matchesSearch = recipe.name.toLowerCase().includes(state.searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });
}

function createRecipeCard(recipe) {
  const card = document.createElement('div');
  card.className = 'recipe-card';
  card.draggable = true;
  card.dataset.recipeId = recipe.id;
  
  card.innerHTML = `
    <div class="recipe-header">
      <span class="recipe-category">${recipe.category}</span>
    </div>
    <h3 class="recipe-title">${recipe.name}</h3>
    <div class="recipe-meta">
      <span>⏱️ ${recipe.prepTime} min</span>
      <span>🍽️ ${recipe.servings} serving${recipe.servings > 1 ? 's' : ''}</span>
    </div>
    <div class="recipe-nutrition">
      <div class="nutrition-item">
        <span class="nutrition-value">${recipe.calories}</span>
        <span class="nutrition-label">Cal</span>
      </div>
      <div class="nutrition-item">
        <span class="nutrition-value">${recipe.protein}g</span>
        <span class="nutrition-label">Protein</span>
      </div>
      <div class="nutrition-item">
        <span class="nutrition-value">${recipe.carbs}g</span>
        <span class="nutrition-label">Carbs</span>
      </div>
      <div class="nutrition-item">
        <span class="nutrition-value">${recipe.fat}g</span>
        <span class="nutrition-label">Fat</span>
      </div>
    </div>
  `;
  
  // Drag events
  card.addEventListener('dragstart', handleRecipeDragStart);
  card.addEventListener('dragend', handleDragEnd);
  
  // Click to view details
  card.addEventListener('click', () => showRecipeModal(recipe));
  
  return card;
}

// ==========================================
// Drag and Drop Handlers
// ==========================================

let draggedElement = null;
let draggedRecipeId = null;
let dragSource = null; // 'recipe-list' or 'calendar'

function handleRecipeDragStart(e) {
  draggedElement = e.target;
  draggedRecipeId = e.target.dataset.recipeId;
  dragSource = 'recipe-list';
  e.target.classList.add('dragging');
  e.dataTransfer.effectAllowed = 'copy';
}

function handleMealDragStart(e) {
  draggedElement = e.target;
  draggedRecipeId = e.target.dataset.recipeId;
  dragSource = 'calendar';
  e.target.classList.add('dragging');
  e.dataTransfer.effectAllowed = 'move';
}

function handleDragEnd(e) {
  e.target.classList.remove('dragging');
  draggedElement = null;
  draggedRecipeId = null;
  dragSource = null;
}

function setupDropZone(column, day) {
  column.addEventListener('dragover', (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = dragSource === 'recipe-list' ? 'copy' : 'move';
    column.classList.add('drag-over');
  });
  
  column.addEventListener('dragleave', () => {
    column.classList.remove('drag-over');
  });
  
  column.addEventListener('drop', (e) => {
    e.preventDefault();
    column.classList.remove('drag-over');
    
    if (draggedRecipeId) {
      if (dragSource === 'recipe-list') {
        addMealToPlan(day, draggedRecipeId);
      } else if (dragSource === 'calendar') {
        const sourceDay = draggedElement.dataset.day;
        const sourceIndex = parseInt(draggedElement.dataset.index);
        moveMealInPlan(sourceDay, sourceIndex, day);
      }
    }
  });
}

// ==========================================
// Meal Plan Management
// ==========================================

function addMealToPlan(day, recipeId) {
  const recipe = state.recipes.find(r => r.id === recipeId);
  if (!recipe) return;
  
  state.mealPlan[day].push(recipe);
  renderCalendar();
  renderShoppingList();
  saveStateToStorage();
}

function removeMealFromPlan(day, index) {
  state.mealPlan[day].splice(index, 1);
  renderCalendar();
  renderShoppingList();
  saveStateToStorage();
}

function moveMealInPlan(sourceDay, sourceIndex, targetDay) {
  const meal = state.mealPlan[sourceDay][sourceIndex];
  state.mealPlan[sourceDay].splice(sourceIndex, 1);
  state.mealPlan[targetDay].push(meal);
  renderCalendar();
  renderShoppingList();
  saveStateToStorage();
}

function clearMealPlan() {
  if (confirm('Are you sure you want to clear your entire meal plan?')) {
    daysOfWeek.forEach(day => {
      state.mealPlan[day] = [];
    });
    renderCalendar();
    renderShoppingList();
    saveStateToStorage();
    showNotification('🗑️ Meal plan cleared', 'success');
  }
}

// ==========================================
// Shopping List Generation
// ==========================================

function renderShoppingList() {
  const container = document.getElementById('shopping-list-content');
  const ingredientsMap = new Map();
  
  // Aggregate ingredients from all meals
  daysOfWeek.forEach(day => {
    state.mealPlan[day].forEach(meal => {
      meal.ingredients.forEach(ingredient => {
        const normalizedIngredient = ingredient.toLowerCase();
        if (ingredientsMap.has(normalizedIngredient)) {
          ingredientsMap.set(normalizedIngredient, ingredientsMap.get(normalizedIngredient) + 1);
        } else {
          ingredientsMap.set(normalizedIngredient, 1);
        }
      });
    });
  });
  
  if (ingredientsMap.size === 0) {
    container.innerHTML = '<div class="empty-state"><p>Add meals to your calendar to generate a shopping list</p></div>';
    return;
  }
  
  // Convert to array and sort
  const ingredients = Array.from(ingredientsMap.entries())
    .sort((a, b) => a[0].localeCompare(b[0]));
  
  // Render ingredients
  const list = document.createElement('div');
  list.className = 'ingredients-list';
  
  ingredients.forEach(([ingredient, count]) => {
    const item = document.createElement('div');
    item.className = 'ingredient-item';
    
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'ingredient-checkbox';
    checkbox.id = `ingredient-${ingredient.replace(/\s/g, '-')}`;
    checkbox.addEventListener('change', (e) => {
      if (e.target.checked) {
        item.classList.add('checked');
      } else {
        item.classList.remove('checked');
      }
    });
    
    const label = document.createElement('label');
    label.className = 'ingredient-text';
    label.htmlFor = checkbox.id;
    label.textContent = count > 1 ? `${ingredient} (×${count})` : ingredient;
    
    item.appendChild(checkbox);
    item.appendChild(label);
    list.appendChild(item);
  });
  
  container.innerHTML = '';
  container.appendChild(list);
}

function exportShoppingList() {
  const ingredientsMap = new Map();
  
  daysOfWeek.forEach(day => {
    state.mealPlan[day].forEach(meal => {
      meal.ingredients.forEach(ingredient => {
        const normalizedIngredient = ingredient.toLowerCase();
        if (ingredientsMap.has(normalizedIngredient)) {
          ingredientsMap.set(normalizedIngredient, ingredientsMap.get(normalizedIngredient) + 1);
        } else {
          ingredientsMap.set(normalizedIngredient, 1);
        }
      });
    });
  });
  
  if (ingredientsMap.size === 0) {
    showNotification('⚠️ No items to export', 'warning');
    return;
  }
  
  const ingredients = Array.from(ingredientsMap.entries())
    .sort((a, b) => a[0].localeCompare(b[0]))
    .map(([ingredient, count]) => count > 1 ? `${ingredient} (×${count})` : ingredient)
    .join('\n');
  
  const text = `🛒 Shopping List\n\n${ingredients}`;
  
  navigator.clipboard.writeText(text).then(() => {
    showNotification('📋 Shopping list copied!', 'success');
  }).catch(() => {
    showNotification('❌ Failed to copy', 'error');
  });
}

// ==========================================
// Recipe Modal
// ==========================================

function showRecipeModal(recipe) {
  const modal = document.getElementById('recipe-modal');
  const modalBody = document.getElementById('modal-body');
  
  modalBody.innerHTML = `
    <div style="text-align: center; margin-bottom: var(--space-lg);">
      <span class="recipe-category" style="display: inline-block; margin-bottom: var(--space-sm);">${recipe.category}</span>
      <h2 style="margin: 0; color: var(--text-primary);">${recipe.name}</h2>
    </div>
    
    <div class="recipe-meta" style="justify-content: center; margin-bottom: var(--space-lg);">
      <span>⏱️ ${recipe.prepTime} min</span>
      <span>🍽️ ${recipe.servings} serving${recipe.servings > 1 ? 's' : ''}</span>
    </div>
    
    <div class="recipe-nutrition" style="margin-bottom: var(--space-xl); padding: var(--space-lg); background: var(--bg-primary); border-radius: var(--radius-md);">
      <div class="nutrition-item">
        <span class="nutrition-value">${recipe.calories}</span>
        <span class="nutrition-label">Calories</span>
      </div>
      <div class="nutrition-item">
        <span class="nutrition-value">${recipe.protein}g</span>
        <span class="nutrition-label">Protein</span>
      </div>
      <div class="nutrition-item">
        <span class="nutrition-value">${recipe.carbs}g</span>
        <span class="nutrition-label">Carbs</span>
      </div>
      <div class="nutrition-item">
        <span class="nutrition-value">${recipe.fat}g</span>
        <span class="nutrition-label">Fat</span>
      </div>
    </div>
    
    <div style="margin-bottom: var(--space-xl);">
      <h3 style="color: var(--color-primary); margin-bottom: var(--space-md);">📝 Ingredients</h3>
      <ul style="list-style: none; padding: 0;">
        ${recipe.ingredients.map(ing => `<li style="padding: var(--space-sm) 0; border-bottom: 1px solid hsla(0, 0%, 100%, 0.05);">• ${ing}</li>`).join('')}
      </ul>
    </div>
    
    <div>
      <h3 style="color: var(--color-primary); margin-bottom: var(--space-md);">👨‍🍳 Instructions</h3>
      <ol style="padding-left: var(--space-lg);">
        ${recipe.instructions.map(step => `<li style="padding: var(--space-sm) 0; color: var(--text-secondary);">${step}</li>`).join('')}
      </ol>
    </div>
  `;
  
  modal.classList.remove('hidden');
  modal.setAttribute('aria-hidden', 'false');
}

function closeRecipeModal() {
  const modal = document.getElementById('recipe-modal');
  modal.classList.add('hidden');
  modal.setAttribute('aria-hidden', 'true');
}

// ==========================================
// Event Listeners
// ==========================================

function attachEventListeners() {
  // Theme toggle
  const themeToggle = document.getElementById('theme-toggle');
  themeToggle.addEventListener('click', toggleTheme);
  themeToggle.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      toggleTheme();
    }
  });
  
  // Save and clear buttons
  document.getElementById('save-plan-btn').addEventListener('click', saveStateToStorage);
  document.getElementById('clear-plan-btn').addEventListener('click', clearMealPlan);
  
  // Shopping list export
  document.getElementById('export-shopping-list').addEventListener('click', exportShoppingList);
  
  // Search
  const searchInput = document.getElementById('search-recipes');
  searchInput.addEventListener('input', (e) => {
    state.searchQuery = e.target.value;
    renderRecipes();
  });
  
  // Filter buttons
  const filterButtons = document.querySelectorAll('.filter-btn');
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.currentFilter = btn.dataset.filter;
      renderRecipes();
    });
  });
  
  // Modal close
  document.getElementById('modal-close').addEventListener('click', closeRecipeModal);
  document.getElementById('recipe-modal').addEventListener('click', (e) => {
    if (e.target.id === 'recipe-modal') {
      closeRecipeModal();
    }
  });
  
  // ESC key to close modal
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeRecipeModal();
    }
  });
}

// ==========================================
// Notification System
// ==========================================

function showNotification(message, type = 'success') {
  // Create notification element
  const notification = document.createElement('div');
  notification.textContent = message;
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    padding: var(--space-md) var(--space-lg);
    background: ${type === 'success' ? 'var(--color-success)' : type === 'error' ? 'var(--color-error)' : 'var(--color-warning)'};
    color: white;
    border-radius: var(--radius-md);
    box-shadow: var(--shadow-lg);
    z-index: 10000;
    animation: slideDown 0.3s ease-out;
    font-weight: 600;
  `;
  
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.style.animation = 'fadeOut 0.3s ease-out';
    setTimeout(() => notification.remove(), 300);
  }, 2500);
}

// ==========================================
// Utility Functions
// ==========================================

// Calculate daily totals
function getDailyNutrition(day) {
  const meals = state.mealPlan[day] || [];
  return meals.reduce((totals, meal) => ({
    calories: totals.calories + meal.calories,
    protein: totals.protein + meal.protein,
    carbs: totals.carbs + meal.carbs,
    fat: totals.fat + meal.fat
  }), { calories: 0, protein: 0, carbs: 0, fat: 0 });
}

// Calculate weekly totals
function getWeeklyNutrition() {
  return daysOfWeek.reduce((totals, day) => {
    const dayNutrition = getDailyNutrition(day);
    return {
      calories: totals.calories + dayNutrition.calories,
      protein: totals.protein + dayNutrition.protein,
      carbs: totals.carbs + dayNutrition.carbs,
      fat: totals.fat + dayNutrition.fat
    };
  }, { calories: 0, protein: 0, carbs: 0, fat: 0 });
}

console.log('🍽️ Meal Prep App Loaded Successfully!');
