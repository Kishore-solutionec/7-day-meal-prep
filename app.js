// ==========================================
// Meal Prep Pro V2 - Enhanced Application
// ==========================================

// ==========================================
// Enhanced Recipe Database (20+ Recipes)
// ==========================================

const recipesDatabase = [
    // BREAKFAST (6 recipes)
    {
        id: 'breakfast-1',
        name: 'Avocado Toast with Poached Eggs',
        category: 'breakfast',
        emoji: '🥑',
        prepTime: 10,
        servings: 1,
        difficulty: 'easy',
        calories: 420,
        protein: 18,
        carbs: 35,
        fat: 24,
        dietary: ['vegetarian'],
        ingredients: [
            { item: '2 slices whole grain bread', category: 'bakery' },
            { item: '1 ripe avocado', category: 'produce' },
            { item: '2 eggs', category: 'dairy' },
            { item: '1 tsp olive oil', category: 'pantry' },
            { item: 'Salt and pepper', category: 'pantry' },
            { item: 'Red pepper flakes', category: 'pantry' }
        ],
        instructions: [
            'Toast bread slices until golden brown',
            'Mash avocado with salt and pepper',
            'Poach eggs in simmering water',
            'Spread avocado on toast',
            'Top with poached eggs and red pepper flakes'
        ]
    },
    {
        id: 'breakfast-2',
        name: 'Greek Yogurt Parfait Bowl',
        category: 'breakfast',
        emoji: '🥣',
        prepTime: 5,
        servings: 1,
        difficulty: 'easy',
        calories: 320,
        protein: 22,
        carbs: 42,
        fat: 8,
        dietary: ['vegetarian'],
        ingredients: [
            { item: '1 cup Greek yogurt', category: 'dairy' },
            { item: '1/2 cup granola', category: 'pantry' },
            { item: '1/2 cup mixed berries', category: 'produce' },
            { item: '1 tbsp honey', category: 'pantry' },
            { item: '1 tbsp chia seeds', category: 'pantry' }
        ],
        instructions: [
            'Layer Greek yogurt in bowl',
            'Add granola and fresh berries',
            'Drizzle with honey',
            'Sprinkle chia seeds on top',
            'Enjoy immediately'
        ]
    },
    {
        id: 'breakfast-3',
        name: 'Protein Power Pancakes',
        category: 'breakfast',
        emoji: '🥞',
        prepTime: 15,
        servings: 2,
        difficulty: 'medium',
        calories: 380,
        protein: 28,
        carbs: 45,
        fat: 10,
        dietary: ['highprotein'],
        ingredients: [
            { item: '1 cup rolled oats', category: 'pantry' },
            { item: '2 eggs', category: 'dairy' },
            { item: '1 scoop protein powder', category: 'pantry' },
            { item: '1/2 cup milk', category: 'dairy' },
            { item: '1 banana', category: 'produce' },
            { item: '1 tsp baking powder', category: 'pantry' },
            { item: 'Maple syrup', category: 'pantry' }
        ],
        instructions: [
            'Blend oats, eggs, protein powder, milk, and banana',
            'Stir in baking powder',
            'Heat non-stick pan over medium heat',
            'Pour batter to form pancakes',
            'Cook until bubbles form, flip, and serve with syrup'
        ]
    },
    {
        id: 'breakfast-4',
        name: 'Overnight Oats with Berries',
        category: 'breakfast',
        emoji: '🌙',
        prepTime: 5,
        servings: 1,
        difficulty: 'easy',
        calories: 290,
        protein: 12,
        carbs: 48,
        fat: 7,
        dietary: ['vegetarian', 'vegan'],
        ingredients: [
            { item: '1/2 cup rolled oats', category: 'pantry' },
            { item: '1/2 cup almond milk', category: 'dairy' },
            { item: '1/4 cup berries', category: 'produce' },
            { item: '1 tbsp almond butter', category: 'pantry' },
            { item: '1 tsp maple syrup', category: 'pantry' }
        ],
        instructions: [
            'Mix oats and almond milk in jar',
            'Add almond butter and maple syrup',
            'Refrigerate overnight',
            'Top with fresh berries in morning',
            'Enjoy cold or warmed'
        ]
    },
    {
        id: 'breakfast-5',
        name: 'Veggie Scramble Bowl',
        category: 'breakfast',
        emoji: '🍳',
        prepTime: 12,
        servings: 1,
        difficulty: 'easy',
        calories: 340,
        protein: 20,
        carbs: 18,
        fat: 22,
        dietary: ['vegetarian', 'keto'],
        ingredients: [
            { item: '3 eggs', category: 'dairy' },
            { item: '1/4 bell pepper', category: 'produce' },
            { item: '1/4 onion', category: 'produce' },
            { item: '1/2 cup spinach', category: 'produce' },
            { item: '1/4 cup cheese', category: 'dairy' },
            { item: '1 tbsp butter', category: 'dairy' }
        ],
        instructions: [
            'Sauté diced peppers and onions in butter',
            'Add spinach until wilted',
            'Pour in beaten eggs',
            'Scramble until cooked',
            'Top with cheese and serve'
        ]
    },
    {
        id: 'breakfast-6',
        name: 'Smoothie Power Bowl',
        category: 'breakfast',
        emoji: '🍌',
        prepTime: 8,
        servings: 1,
        difficulty: 'easy',
        calories: 350,
        protein: 18,
        carbs: 52,
        fat: 9,
        dietary: ['vegetarian'],
        ingredients: [
            { item: '1 frozen banana', category: 'produce' },
            { item: '1/2 cup frozen berries', category: 'produce' },
            { item: '1 scoop protein powder', category: 'pantry' },
            { item: '1/2 cup almond milk', category: 'dairy' },
            { item: '2 tbsp granola', category: 'pantry' },
            { item: '1 tbsp coconut flakes', category: 'pantry' }
        ],
        instructions: [
            'Blend banana, berries, protein powder, and milk until thick',
            'Pour into bowl',
            'Top with granola and coconut flakes',
            'Add fresh fruit if desired',
            'Eat with a spoon'
        ]
    },

    // LUNCH (5 recipes)
    {
        id: 'lunch-1',
        name: 'Grilled Chicken Caesar Salad',
        category: 'lunch',
        emoji: '🥗',
        prepTime: 20,
        servings: 1,
        difficulty: 'medium',
        calories: 450,
        protein: 42,
        carbs: 28,
        fat: 18,
        dietary: ['highprotein'],
        ingredients: [
            { item: '6 oz chicken breast', category: 'meat' },
            { item: '4 cups romaine lettuce', category: 'produce' },
            { item: '1/2 cup cherry tomatoes', category: 'produce' },
            { item: '1/4 cup parmesan cheese', category: 'dairy' },
            { item: '2 tbsp Caesar dressing', category: 'pantry' },
            { item: '1/4 cup croutons', category: 'pantry' }
        ],
        instructions: [
            'Season and grill chicken breast',
            'Chop romaine lettuce',
            'Slice cherry tomatoes',
            'Arrange lettuce, tomatoes on plate',
            'Top with sliced chicken, parmesan, croutons, and dressing'
        ]
    },
    {
        id: 'lunch-2',
        name: 'Quinoa Buddha Bowl',
        category: 'lunch',
        emoji: '🥙',
        prepTime: 25,
        servings: 2,
        difficulty: 'medium',
        calories: 520,
        protein: 18,
        carbs: 68,
        fat: 20,
        dietary: ['vegetarian', 'vegan'],
        ingredients: [
            { item: '1 cup quinoa', category: 'pantry' },
            { item: '1 can chickpeas', category: 'pantry' },
            { item: '2 cups kale', category: 'produce' },
            { item: '1 sweet potato', category: 'produce' },
            { item: '1 avocado', category: 'produce' },
            { item: '2 tbsp tahini', category: 'pantry' },
            { item: '1 lemon', category: 'produce' }
        ],
        instructions: [
            'Cook quinoa according to package',
            'Roast chickpeas and diced sweet potato at 400°F',
            'Massage kale with lemon juice',
            'Assemble bowl with all ingredients',
            'Drizzle with tahini dressing'
        ]
    },
    {
        id: 'lunch-3',
        name: 'Turkey & Avocado Wrap',
        category: 'lunch',
        emoji: '🌯',
        prepTime: 10,
        servings: 1,
        difficulty: 'easy',
        calories: 380,
        protein: 32,
        carbs: 38,
        fat: 12,
        dietary: ['highprotein'],
        ingredients: [
            { item: '1 whole wheat tortilla', category: 'bakery' },
            { item: '4 oz turkey breast', category: 'meat' },
            { item: '2 lettuce leaves', category: 'produce' },
            { item: '2 tomato slices', category: 'produce' },
            { item: '1/4 avocado', category: 'produce' },
            { item: '1 tbsp hummus', category: 'pantry' },
            { item: 'Mustard', category: 'pantry' }
        ],
        instructions: [
            'Spread hummus on tortilla',
            'Layer turkey, lettuce, and tomato',
            'Add sliced avocado',
            'Add mustard to taste',
            'Roll tightly and slice in half'
        ]
    },
    {
        id: 'lunch-4',
        name: 'Asian Chicken Lettuce Wraps',
        category: 'lunch',
        emoji: '🥬',
        prepTime: 18,
        servings: 2,
        difficulty: 'medium',
        calories: 320,
        protein: 28,
        carbs: 22,
        fat: 14,
        dietary: ['keto', 'highprotein'],
        ingredients: [
            { item: '1 lb ground chicken', category: 'meat' },
            { item: '1 head butter lettuce', category: 'produce' },
            { item: '1/4 cup water chestnuts', category: 'pantry' },
            { item: '2 green onions', category: 'produce' },
            { item: '2 tbsp soy sauce', category: 'pantry' },
            { item: '1 tbsp sesame oil', category: 'pantry' },
            { item: '1 tbsp ginger', category: 'produce' }
        ],
        instructions: [
            'Cook ground chicken with ginger',
            'Add water chestnuts and green onions',
            'Season with soy sauce and sesame oil',
            'Separate lettuce leaves',
            'Spoon chicken mixture into lettuce cups'
        ]
    },
    {
        id: 'lunch-5',
        name: 'Mediterranean Pasta Salad',
        category: 'lunch',
        emoji: '🍝',
        prepTime: 15,
        servings: 3,
        difficulty: 'easy',
        calories: 420,
        protein: 14,
        carbs: 55,
        fat: 16,
        dietary: ['vegetarian'],
        ingredients: [
            { item: '2 cups pasta', category: 'pantry' },
            { item: '1 cup cherry tomatoes', category: 'produce' },
            { item: '1/2 cup cucumber', category: 'produce' },
            { item: '1/4 cup olives', category: 'pantry' },
            { item: '1/4 cup feta cheese', category: 'dairy' },
            { item: '3 tbsp olive oil', category: 'pantry' },
            { item: '2 tbsp lemon juice', category: 'produce' }
        ],
        instructions: [
            'Cook pasta according to package',
            'Dice tomatoes and cucumber',
            'Mix pasta with vegetables',
            'Add olives and feta',
            'Dress with olive oil and lemon juice'
        ]
    },

    // DINNER (6 recipes)
    {
        id: 'dinner-1',
        name: 'Herb-Crusted Salmon with Veggies',
        category: 'dinner',
        emoji: '🐟',
        prepTime: 30,
        servings: 2,
        difficulty: 'medium',
        calories: 580,
        protein: 45,
        carbs: 32,
        fat: 28,
        dietary: ['keto', 'highprotein'],
        ingredients: [
            { item: '2 salmon fillets (6 oz each)', category: 'meat' },
            { item: '2 cups broccoli', category: 'produce' },
            { item: '1 bell pepper', category: 'produce' },
            { item: '1 zucchini', category: 'produce' },
            { item: '3 tbsp olive oil', category: 'pantry' },
            { item: '2 garlic cloves', category: 'produce' },
            { item: 'Fresh herbs', category: 'produce' },
            { item: 'Lemon', category: 'produce' }
        ],
        instructions: [
            'Preheat oven to 400°F',
            'Toss vegetables with olive oil and seasonings',
            'Roast vegetables for 15 minutes',
            'Season salmon with herbs and garlic',
            'Add salmon to pan and bake 12-15 minutes'
        ]
    },
    {
        id: 'dinner-2',
        name: 'Teriyaki Chicken Stir Fry',
        category: 'dinner',
        emoji: '🍜',
        prepTime: 25,
        servings: 3,
        difficulty: 'medium',
        calories: 480,
        protein: 38,
        carbs: 52,
        fat: 14,
        dietary: ['highprotein'],
        ingredients: [
            { item: '1 lb chicken breast', category: 'meat' },
            { item: '2 cups mixed vegetables', category: 'produce' },
            { item: '1 cup brown rice', category: 'pantry' },
            { item: '3 tbsp teriyaki sauce', category: 'pantry' },
            { item: '2 tbsp sesame oil', category: 'pantry' },
            { item: '2 garlic cloves', category: 'produce' },
            { item: '1 inch ginger', category: 'produce' },
            { item: 'Green onions', category: 'produce' }
        ],
        instructions: [
            'Cook brown rice according to package',
            'Dice chicken and season',
            'Stir fry chicken in sesame oil',
            'Add vegetables, garlic, and ginger',
            'Add teriyaki sauce and serve over rice'
        ]
    },
    {
        id: 'dinner-3',
        name: 'Classic Spaghetti Bolognese',
        category: 'dinner',
        emoji: '🍝',
        prepTime: 35,
        servings: 4,
        difficulty: 'medium',
        calories: 620,
        protein: 32,
        carbs: 75,
        fat: 20,
        dietary: [],
        ingredients: [
            { item: '1 lb ground beef', category: 'meat' },
            { item: '12 oz spaghetti', category: 'pantry' },
            { item: '1 can crushed tomatoes', category: 'pantry' },
            { item: '1 onion', category: 'produce' },
            { item: '2 garlic cloves', category: 'produce' },
            { item: '2 tbsp tomato paste', category: 'pantry' },
            { item: 'Italian herbs', category: 'pantry' },
            { item: 'Parmesan cheese', category: 'dairy' }
        ],
        instructions: [
            'Cook spaghetti according to package',
            'Brown ground beef with onion and garlic',
            'Add tomatoes, paste, and Italian herbs',
            'Simmer sauce for 20 minutes',
            'Serve over spaghetti with parmesan'
        ]
    },
    {
        id: 'dinner-4',
        name: 'Colorful Veggie Tacos',
        category: 'dinner',
        emoji: '🌮',
        prepTime: 20,
        servings: 2,
        difficulty: 'easy',
        calories: 420,
        protein: 15,
        carbs: 58,
        fat: 16,
        dietary: ['vegetarian', 'vegan'],
        ingredients: [
            { item: '6 corn tortillas', category: 'bakery' },
            { item: '1 can black beans', category: 'pantry' },
            { item: '1 bell pepper', category: 'produce' },
            { item: '1 onion', category: 'produce' },
            { item: '1 avocado', category: 'produce' },
            { item: '1/2 cup corn', category: 'pantry' },
            { item: 'Salsa', category: 'pantry' },
            { item: 'Cilantro', category: 'produce' }
        ],
        instructions: [
            'Sauté diced peppers and onions',
            'Add black beans, corn, and taco seasoning',
            'Warm tortillas',
            'Fill with veggie mixture',
            'Top with avocado, salsa, and cilantro'
        ]
    },
    {
        id: 'dinner-5',
        name: 'Garlic Butter Shrimp Pasta',
        category: 'dinner',
        emoji: '🍤',
        prepTime: 22,
        servings: 2,
        difficulty: 'medium',
        calories: 550,
        protein: 35,
        carbs: 62,
        fat: 18,
        dietary: ['highprotein'],
        ingredients: [
            { item: '8 oz pasta', category: 'pantry' },
            { item: '1 lb shrimp', category: 'meat' },
            { item: '4 garlic cloves', category: 'produce' },
            { item: '3 tbsp butter', category: 'dairy' },
            { item: '1/4 cup white wine', category: 'pantry' },
            { item: '2 tbsp parsley', category: 'produce' },
            { item: 'Lemon juice', category: 'produce' },
            { item: 'Parmesan cheese', category: 'dairy' }
        ],
        instructions: [
            'Cook pasta according to package',
            'Sauté garlic in butter',
            'Add shrimp and cook until pink',
            'Deglaze with white wine',
            'Toss with pasta, lemon, and parmesan'
        ]
    },
    {
        id: 'dinner-6',
        name: 'Thai Green Curry',
        category: 'dinner',
        emoji: '🍛',
        prepTime: 28,
        servings: 3,
        difficulty: 'medium',
        calories: 485,
        protein: 24,
        carbs: 54,
        fat: 20,
        dietary: [],
        ingredients: [
            { item: '1 lb chicken thighs', category: 'meat' },
            { item: '1 can coconut milk', category: 'pantry' },
            { item: '2 tbsp green curry paste', category: 'pantry' },
            { item: '1 cup vegetables', category: 'produce' },
            { item: '1 cup jasmine rice', category: 'pantry' },
            { item: '2 tbsp fish sauce', category: 'pantry' },
            { item: 'Thai basil', category: 'produce' },
            { item: 'Lime', category: 'produce' }
        ],
        instructions: [
            'Cook jasmine rice',
            'Sauté curry paste in coconut milk',
            'Add diced chicken and cook through',
            'Add vegetables and fish sauce',
            'Serve over rice with basil and lime'
        ]
    },

    // SNACKS (4 recipes)
    {
        id: 'snack-1',
        name: 'Protein Power Smoothie',
        category: 'snack',
        emoji: '🥤',
        prepTime: 5,
        servings: 1,
        difficulty: 'easy',
        calories: 280,
        protein: 25,
        carbs: 35,
        fat: 6,
        dietary: ['vegetarian', 'highprotein'],
        ingredients: [
            { item: '1 scoop protein powder', category: 'pantry' },
            { item: '1 banana', category: 'produce' },
            { item: '1 cup almond milk', category: 'dairy' },
            { item: '1 tbsp peanut butter', category: 'pantry' },
            { item: '1/2 cup ice', category: 'pantry' },
            { item: 'Cinnamon', category: 'pantry' }
        ],
        instructions: [
            'Add all ingredients to blender',
            'Blend until smooth and creamy',
            'Pour into glass',
            'Sprinkle with cinnamon',
            'Enjoy immediately'
        ]
    },
    {
        id: 'snack-2',
        name: 'Hummus & Veggie Platter',
        category: 'snack',
        emoji: '🥕',
        prepTime: 5,
        servings: 1,
        difficulty: 'easy',
        calories: 180,
        protein: 7,
        carbs: 22,
        fat: 8,
        dietary: ['vegetarian', 'vegan'],
        ingredients: [
            { item: '1/2 cup hummus', category: 'pantry' },
            { item: '1 cup carrot sticks', category: 'produce' },
            { item: '1 cup cucumber slices', category: 'produce' },
            { item: '1/2 bell pepper', category: 'produce' }
        ],
        instructions: [
            'Slice vegetables into sticks',
            'Arrange on plate with hummus',
            'Enjoy as healthy snack'
        ]
    },
    {
        id: 'snack-3',
        name: 'Energy Trail Mix',
        category: 'snack',
        emoji: '🥜',
        prepTime: 2,
        servings: 1,
        difficulty: 'easy',
        calories: 240,
        protein: 8,
        carbs: 28,
        fat: 12,
        dietary: ['vegetarian', 'vegan'],
        ingredients: [
            { item: '1/4 cup almonds', category: 'pantry' },
            { item: '1/4 cup walnuts', category: 'pantry' },
            { item: '2 tbsp dried cranberries', category: 'pantry' },
            { item: '2 tbsp dark chocolate chips', category: 'pantry' }
        ],
        instructions: [
            'Mix all ingredients in bowl',
            'Store in airtight container',
            'Portion out as needed'
        ]
    },
    {
        id: 'snack-4',
        name: 'Apple Slices with Almond Butter',
        category: 'snack',
        emoji: '🍎',
        prepTime: 3,
        servings: 1,
        difficulty: 'easy',
        calories: 210,
        protein: 6,
        carbs: 28,
        fat: 10,
        dietary: ['vegetarian', 'vegan'],
        ingredients: [
            { item: '1 apple', category: 'produce' },
            { item: '2 tbsp almond butter', category: 'pantry' },
            { item: 'Cinnamon', category: 'pantry' }
        ],
        instructions: [
            'Slice apple into wedges',
            'Arrange on plate',
            'Serve with almond butter for dipping',
            'Sprinkle with cinnamon'
        ]
    }
];

// ==========================================
// State Management - Enhanced
// ==========================================

let state = {
    recipes: recipesDatabase,
    customRecipes: [],
    mealPlan: {
        monday: [],
        tuesday: [],
        wednesday: [],
        thursday: [],
        friday: [],
        saturday: [],
        sunday: []
    },
    favorites: [],
    currentTab: 'calendar',
    currentFilter: 'all',
    dietaryFilters: [],
    searchQuery: '',
    quickPrepFilter: false,
    favoritesOnly: false,
    recipeView: 'grid',
    theme: 'dark'
};

// Drag and Drop State Variables
let draggedElement = null;
let draggedRecipeId = null;
let dragSource = null;

// ==========================================
// Initialization
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    loadStateFromStorage();
    initializeTheme();
    initializeTabs();
    initializeSidebar();
    renderCalendar();
    renderRecipes();
    renderDashboard();
    renderTimeline();
    renderShoppingList();
    attachEventListeners();
});

// ==========================================
// Local Storage - Enhanced
// ==========================================

function saveStateToStorage() {
    try {
        const saveData = {
            mealPlan: state.mealPlan,
            favorites: state.favorites,
            customRecipes: state.customRecipes,
            theme: state.theme
        };
        localStorage.setItem('mealPrepProState', JSON.stringify(saveData));
        showNotification('✅ Plan saved successfully!', 'success');
    } catch (error) {
        showNotification('❌ Failed to save', 'error');
        console.error('Save error:', error);
    }
}

function loadStateFromStorage() {
    try {
        const savedState = localStorage.getItem('mealPrepProState');
        if (savedState) {
            const parsedState = JSON.parse(savedState);
            state.mealPlan = parsedState.mealPlan || state.mealPlan;
            state.favorites = parsedState.favorites || [];
            state.customRecipes = parsedState.customRecipes || [];
            state.theme = parsedState.theme || state.theme;
            state.recipes = [...recipesDatabase, ...state.customRecipes];
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
// Tab Navigation
// ==========================================

function initializeTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => switchTab(btn.dataset.tab));
    });
}

function switchTab(tabName) {
    // Update state
    state.currentTab = tabName;

    // Update button states
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
        btn.setAttribute('aria-selected', 'false');
    });
    document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');
    document.querySelector(`[data-tab="${tabName}"]`).setAttribute('aria-selected', 'true');

    // Update content visibility
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });
    document.getElementById(`tab-${tabName}`).classList.add('active');

    // Render appropriate content
    if (tabName === 'dashboard') renderDashboard();
    if (tabName === 'timeline') renderTimeline();
    if (tabName === 'shopping') renderShoppingList();
}

// Continue in next part...

// ==========================================
// Calendar Rendering - Enhanced
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

    // Also render sidebar recipes
    renderSidebarRecipes();
}

// ==========================================
// Sidebar Recipe Rendering - NEW
// ==========================================

let sidebarFilter = 'all';
let sidebarSearch = '';

function renderSidebarRecipes() {
    const sidebarList = document.getElementById('sidebar-recipe-list');
    if (!sidebarList) return;

    sidebarList.innerHTML = '';

    // Filter recipes for sidebar
    const filteredRecipes = state.recipes.filter(recipe => {
        const matchesCategory = sidebarFilter === 'all' || recipe.category === sidebarFilter;
        const matchesSearch = recipe.name.toLowerCase().includes(sidebarSearch.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    if (filteredRecipes.length === 0) {
        sidebarList.innerHTML = '<div style="text-align: center; color: var(--text-muted); padding: var(--space-lg);">No recipes found</div>';
        return;
    }

    filteredRecipes.forEach(recipe => {
        const item = createSidebarRecipeItem(recipe);
        sidebarList.appendChild(item);
    });
}

function createSidebarRecipeItem(recipe) {
    const item = document.createElement('div');
    item.className = 'sidebar-recipe-item';
    item.draggable = true;
    item.dataset.recipeId = recipe.id;
    item.title = `${recipe.name} - ${recipe.calories} cal, ${recipe.prepTime} min\nDrag to add to calendar`;

    item.innerHTML = `
        <span class="sidebar-recipe-emoji">${recipe.emoji || '🍽️'}</span>
        <div class="sidebar-recipe-info">
            <div class="sidebar-recipe-name">${recipe.name}</div>
            <div class="sidebar-recipe-meta">
                <span>${recipe.calories} cal</span>
                <span>⏱️ ${recipe.prepTime}m</span>
            </div>
        </div>
    `;

    // Drag events
    item.addEventListener('dragstart', (e) => {
        e.target.classList.add('dragging');
        draggedElement = e.target;
        draggedRecipeId = recipe.id;
        dragSource = 'sidebar';
        e.dataTransfer.effectAllowed = 'copy';
        e.dataTransfer.setData('text/plain', recipe.id);
    });

    item.addEventListener('dragend', (e) => {
        e.target.classList.remove('dragging');
        draggedElement = null;
        draggedRecipeId = null;
        dragSource = null;
    });

    // Click to view recipe
    item.addEventListener('click', () => showRecipeModal(recipe));

    return item;
}

function initializeSidebar() {
    // Sidebar search
    const sidebarSearchInput = document.getElementById('sidebar-search');
    if (sidebarSearchInput) {
        sidebarSearchInput.addEventListener('input', (e) => {
            sidebarSearch = e.target.value;
            renderSidebarRecipes();
        });
    }

    // Sidebar category filters
    document.querySelectorAll('.sidebar-filter').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.sidebar-filter').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            sidebarFilter = btn.dataset.cat;
            renderSidebarRecipes();
        });
    });
}

function createDayColumn(day, label) {
    const column = document.createElement('div');
    column.className = 'day-column';
    column.dataset.day = day;

    const header = document.createElement('div');
    header.className = 'day-header';

    const dayName = document.createElement('div');
    dayName.className = 'day-name';
    dayName.textContent = label;

    const dayStats = document.createElement('div');
    dayStats.className = 'day-stats';
    const nutrition = getDailyNutrition(day);
    dayStats.textContent = `${nutrition.calories} cal`;

    header.appendChild(dayName);
    header.appendChild(dayStats);

    const mealsContainer = document.createElement('div');
    mealsContainer.className = 'day-meals';
    mealsContainer.id = `meals-${day}`;

    const meals = state.mealPlan[day] || [];
    if (meals.length === 0) {
        const emptySlot = document.createElement('div');
        emptySlot.className = 'empty-slot';
        emptySlot.textContent = 'Drop recipes here';
        mealsContainer.appendChild(emptySlot);
    } else {
        meals.forEach((meal, index) => {
            const mealSlot = createMealSlot(meal, day, index);
            mealsContainer.appendChild(mealSlot);
        });
    }

    column.appendChild(header);
    column.appendChild(mealsContainer);
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

    const mealHeader = document.createElement('div');
    mealHeader.className = 'meal-header';

    const icon = document.createElement('span');
    icon.className = 'meal-icon';
    icon.textContent = recipe.emoji || '🍽️';

    const category = document.createElement('span');
    category.className = 'meal-category';
    category.textContent = recipe.category;

    mealHeader.appendChild(icon);
    mealHeader.appendChild(category);

    const mealName = document.createElement('div');
    mealName.className = 'meal-name';
    mealName.textContent = recipe.name;

    const nutrition = document.createElement('div');
    nutrition.className = 'meal-nutrition';
    nutrition.innerHTML = `
    <span>🔥 ${recipe.calories} cal</span>
    <span>💪 ${recipe.protein}g</span>
  `;

    const actions = document.createElement('div');
    actions.className = 'meal-actions';

    const favoriteBtn = document.createElement('button');
    favoriteBtn.className = `meal-action-btn favorite ${state.favorites.includes(recipe.id) ? 'active' : ''}`;
    favoriteBtn.textContent = '⭐';
    favoriteBtn.onclick = (e) => {
        e.stopPropagation();
        toggleFavorite(recipe.id);
    };

    const removeBtn = document.createElement('button');
    removeBtn.className = 'meal-action-btn remove';
    removeBtn.textContent = '✕';
    removeBtn.onclick = (e) => {
        e.stopPropagation();
        removeMealFromPlan(day, index);
    };

    actions.appendChild(favoriteBtn);
    actions.appendChild(removeBtn);

    slot.appendChild(mealHeader);
    slot.appendChild(mealName);
    slot.appendChild(nutrition);
    slot.appendChild(actions);

    slot.addEventListener('dragstart', handleMealDragStart);
    slot.addEventListener('dragend', handleDragEnd);
    slot.addEventListener('dblclick', () => showRecipeModal(recipe));

    return slot;
}

// ==========================================
// Recipe Rendering - Enhanced
// ==========================================

function renderRecipes() {
    const recipeList = document.getElementById('recipe-list');
    recipeList.innerHTML = '';

    const filteredRecipes = getFilteredRecipes();

    if (filteredRecipes.length === 0) {
        const emptyState = document.createElement('div');
        emptyState.className = 'empty-state';
        emptyState.innerHTML = '<p>No recipes found matching your filters</p>';
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
        // Category filter
        const matchesCategory = state.currentFilter === 'all' || recipe.category === state.currentFilter;

        // Search filter
        const matchesSearch = recipe.name.toLowerCase().includes(state.searchQuery.toLowerCase());

        // Dietary filters
        const matchesDietary = state.dietaryFilters.length === 0 ||
            state.dietaryFilters.every(diet => recipe.dietary && recipe.dietary.includes(diet));

        // Quick prep filter
        const matchesQuickPrep = !state.quickPrepFilter || recipe.prepTime <= 15;

        // Favorites filter
        const matchesFavorites = !state.favoritesOnly || state.favorites.includes(recipe.id);

        return matchesCategory && matchesSearch && matchesDietary && matchesQuickPrep && matchesFavorites;
    });
}

function createRecipeCard(recipe) {
    const card = document.createElement('div');
    card.className = 'recipe-card';
    card.draggable = true;
    card.dataset.recipeId = recipe.id;

    const imageDiv = document.createElement('div');
    imageDiv.className = 'recipe-image';
    imageDiv.style.background = `linear-gradient(135deg, hsl(${Math.random() * 360}, 70%, 50%), hsl(${Math.random() * 360}, 70%, 60%))`;

    const emoji = document.createElement('div');
    emoji.className = 'recipe-image-emoji';
    emoji.textContent = recipe.emoji || '🍽️';
    imageDiv.appendChild(emoji);

    const content = document.createElement('div');
    content.className = 'recipe-content';

    content.innerHTML = `
    <div class="recipe-header">
      <span class="recipe-category-badge">${recipe.category}</span>
      <span class="recipe-favorite ${state.favorites.includes(recipe.id) ? 'active' : ''}" data-recipe-id="${recipe.id}">⭐</span>
    </div>
    <h3 class="recipe-title">${recipe.name}</h3>
    <div class="recipe-meta">
      <span>⏱️ ${recipe.prepTime} min</span>
      <span>🍽️ ${recipe.servings} serving${recipe.servings > 1 ? 's' : ''}</span>
      ${recipe.difficulty ? `<span>📊 ${recipe.difficulty}</span>` : ''}
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

    card.appendChild(imageDiv);
    card.appendChild(content);

    card.addEventListener('dragstart', handleRecipeDragStart);
    card.addEventListener('dragend', handleDragEnd);
    card.addEventListener('click', (e) => {
        if (!e.target.classList.contains('recipe-favorite')) {
            showRecipeModal(recipe);
        }
    });

    const favoriteIcon = card.querySelector('.recipe-favorite');
    favoriteIcon.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleFavorite(recipe.id);
    });

    return card;
}

// ==========================================
// Dashboard Analytics
// ==========================================

function renderDashboard() {
    renderDashboardStats();
    renderCalorieChart();
    renderMacroBreakdown();
}

function renderDashboardStats() {
    const statsContainer = document.getElementById('dashboard-stats');
    statsContainer.innerHTML = '';

    const weeklyNutrition = getWeeklyNutrition();
    const mealCount = daysOfWeek.reduce((count, day) => count + state.mealPlan[day].length, 0);
    const avgCalories = mealCount > 0 ? Math.round(weeklyNutrition.calories / 7) : 0;

    const stats = [
        {
            label: 'Total Weekly Calories',
            value: weeklyNutrition.calories.toLocaleString(),
            subtitle: 'Across all planned meals'
        },
        {
            label: 'Avg Daily Calories',
            value: avgCalories.toLocaleString(),
            subtitle: 'Average per day'
        },
        {
            label: 'Meals Planned',
            value: mealCount,
            subtitle: 'This week'
        },
        {
            label: 'Total Protein',
            value: `${weeklyNutrition.protein}g`,
            subtitle: 'Weekly intake'
        }
    ];

    stats.forEach(stat => {
        const statCard = document.createElement('div');
        statCard.className = 'stat-card';
        statCard.innerHTML = `
      <div class="stat-label">${stat.label}</div>
      <div class="stat-value">${stat.value}</div>
      <div class="stat-subtitle">${stat.subtitle}</div>
    `;
        statsContainer.appendChild(statCard);
    });
}

function renderCalorieChart() {
    const chartContainer = document.getElementById('calorie-chart');
    chartContainer.innerHTML = '';

    const maxCalories = Math.max(...daysOfWeek.map(day => getDailyNutrition(day).calories), 1);

    daysOfWeek.forEach((day, index) => {
        const nutrition = getDailyNutrition(day);
        const heightPercent = (nutrition.calories / maxCalories) * 100;

        const bar = document.createElement('div');
        bar.className = 'bar';
        bar.style.height = `${heightPercent}%`;
        bar.innerHTML = `
      <span class="bar-value">${nutrition.calories}</span>
      <span class="bar-label">${dayLabels[index].slice(0, 3)}</span>
    `;
        bar.title = `${dayLabels[index]}: ${nutrition.calories} calories`;
        chartContainer.appendChild(bar);
    });
}

function renderMacroBreakdown() {
    const container = document.getElementById('macro-breakdown');
    const weeklyNutrition = getWeeklyNutrition();

    const total = weeklyNutrition.protein + weeklyNutrition.carbs + weeklyNutrition.fat;
    const proteinPercent = total > 0 ? Math.round((weeklyNutrition.protein / total) * 100) : 33;
    const carbsPercent = total > 0 ? Math.round((weeklyNutrition.carbs / total) * 100) : 33;
    const fatPercent = total > 0 ? Math.round((weeklyNutrition.fat / total) * 100) : 34;

    container.innerHTML = `
    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--space-xl); margin-bottom: var(--space-lg);">
      <div class="text-center">
        <div class="stat-value" style="font-size: var(--text-3xl);">${proteinPercent}%</div>
        <div class="stat-label">Protein</div>
        <div class="progress-bar" style="margin-top: var(--space-sm);">
          <div class="progress-fill" style="width: ${proteinPercent}%; background: var(--gradient-primary);"></div>
        </div>
      </div>
      <div class="text-center">
        <div class="stat-value" style="font-size: var(--text-3xl); background: var(--gradient-accent);">${carbsPercent}%</div>
        <div class="stat-label">Carbs</div>
        <div class="progress-bar" style="margin-top: var(--space-sm);">
          <div class="progress-fill" style="width: ${carbsPercent}%; background: var(--gradient-accent);"></div>
        </div>
      </div>
      <div class="text-center">
        <div class="stat-value" style="font-size: var(--text-3xl); background: var(--gradient-success);">${fatPercent}%</div>
        <div class="stat-label">Fats</div>
        <div class="progress-bar" style="margin-top: var(--space-sm);">
          <div class="progress-fill" style="width: ${fatPercent}%; background: var(--gradient-success);"></div>
        </div>
      </div>
    </div>
    <div style="text-align: center; color: var(--text-muted); font-size: var(--text-sm);">
      Total: ${weeklyNutrition.protein}g protein • ${weeklyNutrition.carbs}g carbs • ${weeklyNutrition.fat}g fats
    </div>
  `;
}

// ==========================================
// Timeline Generator
// ==========================================

function renderTimeline() {
    const timelineContainer = document.getElementById('timeline-content');
    const allMeals = [];

    daysOfWeek.forEach(day => {
        state.mealPlan[day].forEach(meal => {
            if (!allMeals.find(m => m.id === meal.id)) {
                allMeals.push(meal);
            }
        });
    });

    if (allMeals.length === 0) {
        timelineContainer.innerHTML = '<div class="empty-state" style="padding: var(--space-3xl);"><p>Add meals to your calendar to generate a prep timeline</p></div>';
        return;
    }

    // Sort by prep time
    allMeals.sort((a, b) => b.prepTime - a.prepTime);

    let currentTime = 9 * 60; // Start at 9:00 AM
    const timeline = document.createElement('div');
    timeline.className = 'timeline';

    allMeals.forEach((meal, index) => {
        const timeItem = document.createElement('div');
        timeItem.className = 'timeline-item';

        const dot = document.createElement('div');
        dot.className = 'timeline-dot';

        const hours = Math.floor(currentTime / 60);
        const minutes = currentTime % 60;
        const timeString = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;

        const content = document.createElement('div');
        content.className = 'timeline-content';
        content.innerHTML = `
      <div class="timeline-time">${timeString} - ${meal.prepTime} min</div>
      <div class="timeline-title">${meal.emoji} ${meal.name}</div>
      <div class="timeline-description">
        Prepare this ${meal.category}. Estimated time: ${meal.prepTime} minutes. 
        ${meal.instructions ? meal.instructions[0] : 'Follow recipe instructions'}
      </div>
    `;

        timeItem.appendChild(dot);
        timeItem.appendChild(content);
        timeline.appendChild(timeItem);

        currentTime += meal.prepTime + 5; // Add 5 min buffer
    });

    const totalTime = currentTime - (9 * 60);
    const summary = document.createElement('div');
    summary.className = 'glass-card-sm';
    summary.style.marginBottom = 'var(--space-xl)';
    summary.innerHTML = `
    <h3 style="color: var(--text-primary); margin-bottom: var(--space-md);">📋 Meal Prep Summary</h3>
    <p style="color: var(--text-secondary);">
      <strong>Total Time:</strong> ${Math.floor(totalTime / 60)} hours ${totalTime % 60} minutes<br>
      <strong>Recipes to Prepare:</strong> ${allMeals.length}<br>
      <strong>Start Time:</strong> 9:00 AM
    </p>
  `;

    timelineContainer.innerHTML = '';
    timelineContainer.appendChild(summary);
    timelineContainer.appendChild(timeline);
}

// ==========================================
// Shopping List - Enhanced with Categories
// ==========================================

function renderShoppingList() {
    const container = document.getElementById('shopping-list-content');
    const summary = document.getElementById('shopping-summary');

    const ingredientsByCategory = categorizeIngredients();
    const categories = Object.keys(ingredientsByCategory);

    if (categories.length === 0) {
        container.innerHTML = '<div class="empty-state"><p>Add meals to generate shopping list</p></div>';
        summary.innerHTML = '';
        return;
    }

    // Summary
    const totalItems = Object.values(ingredientsByCategory).reduce((sum, items) => sum + items.length, 0);
    summary.innerHTML = `
    <div class="stat-label">Shopping Summary</div>
    <div class="stat-value">${totalItems}</div>
    <div class="stat-subtitle">Total items across ${categories.length} categories</div>
  `;

    // Categories
    const categoriesContainer = document.createElement('div');
    categoriesContainer.className = 'shopping-categories';

    const categoryIcons = {
        'produce': '🥬',
        'meat': '🥩',
        'dairy': '🥛',
        'pantry': '🥫',
        'bakery': '🍞'
    };

    categories.forEach(category => {
        const section = document.createElement('div');
        section.className = 'category-section';

        const header = document.createElement('div');
        header.className = 'category-header';
        header.innerHTML = `
      <span class="category-icon">${categoryIcons[category] || '🛒'}</span>
      <span class="category-title">${category.charAt(0).toUpperCase() + category.slice(1)}</span>
    `;

        const list = document.createElement('div');
        list.className = 'ingredient-list';

        ingredientsByCategory[category].forEach((ingredient, index) => {
            const item = document.createElement('div');
            item.className = 'ingredient-item';

            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.className = 'ingredient-checkbox';
            checkbox.id = `ingredient-${category}-${index}`;
            checkbox.addEventListener('change', (e) => {
                item.classList.toggle('checked', e.target.checked);
            });

            const label = document.createElement('label');
            label.className = 'ingredient-text';
            label.htmlFor = checkbox.id;
            label.textContent = ingredient.count > 1 ? `${ingredient.item} (×${ingredient.count})` : ingredient.item;

            item.appendChild(checkbox);
            item.appendChild(label);
            list.appendChild(item);
        });

        section.appendChild(header);
        section.appendChild(list);
        categoriesContainer.appendChild(section);
    });

    container.innerHTML = '';
    container.appendChild(categoriesContainer);
}

function categorizeIngredients() {
    const ingredientsMap = new Map();

    daysOfWeek.forEach(day => {
        state.mealPlan[day].forEach(meal => {
            if (meal.ingredients) {
                meal.ingredients.forEach(ing => {
                    const key = `${ing.category}:${ing.item.toLowerCase()}`;
                    if (ingredientsMap.has(key)) {
                        ingredientsMap.get(key).count++;
                    } else {
                        ingredientsMap.set(key, {
                            item: ing.item,
                            category: ing.category || 'pantry',
                            count: 1
                        });
                    }
                });
            }
        });
    });

    const byCategory = {};
    ingredientsMap.forEach(ing => {
        if (!byCategory[ing.category]) {
            byCategory[ing.category] = [];
        }
        byCategory[ing.category].push(ing);
    });

    // Sort each category
    Object.keys(byCategory).forEach(cat => {
        byCategory[cat].sort((a, b) => a.item.localeCompare(b.item));
    });

    return byCategory;
}

// ==========================================
// Drag and Drop - Enhanced
// ==========================================

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
    // Handle dragover on the entire column
    column.addEventListener('dragover', (e) => {
        e.preventDefault();
        e.stopPropagation();
        e.dataTransfer.dropEffect = dragSource === 'calendar' ? 'move' : 'copy';
        column.classList.add('drag-over');
    });

    column.addEventListener('dragleave', (e) => {
        // Only remove class if we're leaving the column entirely
        if (!column.contains(e.relatedTarget)) {
            column.classList.remove('drag-over');
        }
    });

    column.addEventListener('drop', (e) => {
        e.preventDefault();
        e.stopPropagation();
        column.classList.remove('drag-over');

        console.log('Drop event:', { draggedRecipeId, dragSource, day });

        if (draggedRecipeId) {
            if (dragSource === 'recipe-list' || dragSource === 'sidebar') {
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
    renderDashboard();
    renderTimeline();
    renderShoppingList();
    saveStateToStorage();
}

function removeMealFromPlan(day, index) {
    state.mealPlan[day].splice(index, 1);
    renderCalendar();
    renderDashboard();
    renderTimeline();
    renderShoppingList();
    saveStateToStorage();
}

function moveMealInPlan(sourceDay, sourceIndex, targetDay) {
    const meal = state.mealPlan[sourceDay][sourceIndex];
    state.mealPlan[sourceDay].splice(sourceIndex, 1);
    state.mealPlan[targetDay].push(meal);
    renderCalendar();
    renderDashboard();
    renderTimeline();
    renderShoppingList();
    saveStateToStorage();
}

function clearMealPlan() {
    if (confirm('Clear entire meal plan? This cannot be undone.')) {
        daysOfWeek.forEach(day => {
            state.mealPlan[day] = [];
        });
        renderCalendar();
        renderDashboard();
        renderTimeline();
        renderShoppingList();
        saveStateToStorage();
        showNotification('🗑️ Meal plan cleared', 'success');
    }
}

// ==========================================
// Favorites System
// ==========================================

function toggleFavorite(recipeId) {
    const index = state.favorites.indexOf(recipeId);
    if (index > -1) {
        state.favorites.splice(index, 1);
    } else {
        state.favorites.push(recipeId);
    }

    renderRecipes();
    renderCalendar();
    saveStateToStorage();
}

// ==========================================
// Modals
// ==========================================

function showRecipeModal(recipe) {
    const modal = document.getElementById('recipe-modal');
    const modalBody = document.getElementById('modal-body');

    modalBody.innerHTML = `
    <div style="text-align: center; margin-bottom: var(--space-xl);">
      <div style="font-size: 5rem; margin-bottom: var(--space-md);">${recipe.emoji || '🍽️'}</div>
      <span class="badge badge-primary">${recipe.category}</span>
      <h2 style="margin: var(--space-md) 0; color: var(--text-primary);">${recipe.name}</h2>
    </div>
    
    <div class="recipe-meta" style="justify-content: center; margin-bottom: var(--space-xl); font-size: var(--text-base);">
      <span>⏱️ ${recipe.prepTime} min</span>
      <span>🍽️ ${recipe.servings} servings</span>
      ${recipe.difficulty ? `<span>📊 ${recipe.difficulty}</span>` : ''}
    </div>
    
    <div class="recipe-nutrition" style="margin-bottom: var(--space-2xl); padding: var(--space-xl); background: var(--bg-primary); border-radius: var(--radius-lg);">
      <div class="nutrition-item">
        <span class="nutrition-value" style="font-size: var(--text-2xl);">${recipe.calories}</span>
        <span class="nutrition-label">Calories</span>
      </div>
      <div class="nutrition-item">
        <span class="nutrition-value" style="font-size: var(--text-2xl);">${recipe.protein}g</span>
        <span class="nutrition-label">Protein</span>
      </div>
      <div class="nutrition-item">
        <span class="nutrition-value" style="font-size: var(--text-2xl);">${recipe.carbs}g</span>
        <span class="nutrition-label">Carbs</span>
      </div>
      <div class="nutrition-item">
        <span class="nutrition-value" style="font-size: var(--text-2xl);">${recipe.fat}g</span>
        <span class="nutrition-label">Fat</span>
      </div>
    </div>
    
    <div style="margin-bottom: var(--space-2xl);">
      <h3 style="color: var(--color-primary); margin-bottom: var(--space-lg); font-size: var(--text-xl);">📝 Ingredients</h3>
      <ul style="list-style: none; padding: 0;">
        ${recipe.ingredients.map(ing => `
          <li style="padding: var(--space-sm) 0; border-bottom: 1px solid hsla(0, 0%, 100%, 0.05); color: var(--text-secondary);">
            • ${typeof ing === 'string' ? ing : ing.item}
          </li>
        `).join('')}
      </ul>
    </div>
    
    <div>
      <h3 style="color: var(--color-primary); margin-bottom: var(--space-lg); font-size: var(--text-xl);">👨‍🍳 Instructions</h3>
      <ol style="padding-left: var(--space-xl);">
        ${recipe.instructions.map(step => `
          <li style="padding: var(--space-md) 0; color: var(--text-secondary); line-height: 1.6;">${step}</li>
        `).join('')}
      </ol>
    </div>
    
    ${recipe.dietary && recipe.dietary.length > 0 ? `
      <div style="margin-top: var(--space-xl); text-align: center;">
        ${recipe.dietary.map(diet => `<span class="badge">${diet}</span>`).join(' ')}
      </div>
    ` : ''}
  `;

    modal.classList.remove('hidden');
}

function closeRecipeModal() {
    document.getElementById('recipe-modal').classList.add('hidden');
}

// ==========================================
// Custom Recipe Creation
// ==========================================

function showCustomRecipeModal() {
    document.getElementById('custom-recipe-modal').classList.remove('hidden');
}

function closeCustomRecipeModal() {
    document.getElementById('custom-recipe-modal').classList.add('hidden');
    document.getElementById('custom-recipe-form').reset();
}

function handleCustomRecipeSubmit(e) {
    e.preventDefault();

    const customRecipe = {
        id: 'custom-' + Date.now(),
        name: document.getElementById('custom-name').value,
        category: document.getElementById('custom-category').value,
        emoji: '🍳',
        prepTime: parseInt(document.getElementById('custom-prep').value),
        servings: parseInt(document.getElementById('custom-servings').value),
        calories: parseInt(document.getElementById('custom-calories').value),
        protein: parseInt(document.getElementById('custom-protein').value),
        carbs: parseInt(document.getElementById('custom-carbs').value),
        fat: parseInt(document.getElementById('custom-fat').value),
        difficulty: 'custom',
        dietary: [],
        ingredients: [{ item: 'Custom ingredients', category: 'pantry' }],
        instructions: ['Follow your custom recipe instructions']
    };

    state.customRecipes.push(customRecipe);
    state.recipes.push(customRecipe);

    closeCustomRecipeModal();
    renderRecipes();
    saveStateToStorage();
    showNotification('✅ Custom recipe added!', 'success');
}

// ==========================================
// Event Listeners - Enhanced
// ==========================================

function attachEventListeners() {
    // Theme toggle
    document.getElementById('theme-toggle').addEventListener('click', toggleTheme);

    // Header buttons
    document.getElementById('save-plan-btn').addEventListener('click', saveStateToStorage);
    document.getElementById('clear-plan-btn').addEventListener('click', clearMealPlan);
    document.getElementById('export-btn').addEventListener('click', () => window.print());

    // Search
    document.getElementById('search-recipes').addEventListener('input', (e) => {
        state.searchQuery = e.target.value;
        renderRecipes();
    });

    // Category filters
    document.querySelectorAll('#category-filters .filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('#category-filters .filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            state.currentFilter = btn.dataset.filter;
            renderRecipes();
        });
    });

    // Dietary filters
    document.querySelectorAll('#dietary-filters .filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const dietary = btn.dataset.dietary;
            btn.classList.toggle('active');
            const index = state.dietaryFilters.indexOf(dietary);
            if (index > -1) {
                state.dietaryFilters.splice(index, 1);
            } else {
                state.dietaryFilters.push(dietary);
            }
            renderRecipes();
        });
    });

    // View toggle
    document.querySelectorAll('.view-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.view-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const view = btn.dataset.view;
            const list = document.getElementById('recipe-list');
            list.classList.remove('grid-view', 'list-view');
            list.classList.add(`${view}-view`);
            state.recipeView = view;
        });
    });

    // Quick filters
    document.getElementById('favorites-filter').addEventListener('click', function () {
        this.classList.toggle('active');
        state.favoritesOnly = !state.favoritesOnly;
        renderRecipes();
    });

    document.getElementById('quick-prep-filter').addEventListener('click', function () {
        this.classList.toggle('active');
        state.quickPrepFilter = !state.quickPrepFilter;
        renderRecipes();
    });

    // Custom recipe
    document.getElementById('add-custom-recipe-btn').addEventListener('click', showCustomRecipeModal);
    document.getElementById('custom-modal-close').addEventListener('click', closeCustomRecipeModal);
    document.getElementById('cancel-custom-recipe').addEventListener('click', closeCustomRecipeModal);
    document.getElementById('custom-recipe-form').addEventListener('submit', handleCustomRecipeSubmit);

    // Shopping list
    document.getElementById('export-shopping-list').addEventListener('click', exportShoppingList);
    document.getElementById('print-shopping-list').addEventListener('click', () => {
        switchTab('shopping');
        setTimeout(() => window.print(), 100);
    });

    // Modal close
    document.getElementById('modal-close').addEventListener('click', closeRecipeModal);
    document.getElementById('recipe-modal').addEventListener('click', (e) => {
        if (e.target.id === 'recipe-modal') closeRecipeModal();
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeRecipeModal();
            closeCustomRecipeModal();
        }
    });
}

// ==========================================
// Utility Functions
// ==========================================

function getDailyNutrition(day) {
    const meals = state.mealPlan[day] || [];
    return meals.reduce((totals, meal) => ({
        calories: totals.calories + meal.calories,
        protein: totals.protein + meal.protein,
        carbs: totals.carbs + meal.carbs,
        fat: totals.fat + meal.fat
    }), { calories: 0, protein: 0, carbs: 0, fat: 0 });
}

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

function exportShoppingList() {
    const ingredientsByCategory = categorizeIngredients();
    const categories = Object.keys(ingredientsByCategory);

    if (categories.length === 0) {
        showNotification('⚠️ No items to export', 'warning');
        return;
    }

    let text = '🛒 SHOPPING LIST\n\n';
    categories.forEach(category => {
        text += `${category.toUpperCase()}\n`;
        ingredientsByCategory[category].forEach(ing => {
            text += `□ ${ing.count > 1 ? `${ing.item} (×${ing.count})` : ing.item}\n`;
        });
        text += '\n';
    });

    navigator.clipboard.writeText(text).then(() => {
        showNotification('📋 Shopping list copied!', 'success');
    }).catch(() => {
        showNotification('❌ Failed to copy', 'error');
    });
}

function showNotification(message, type = 'success') {
    const container = document.getElementById('notification-container');
    const notification = document.createElement('div');

    const colors = {
        success: 'var(--color-success)',
        error: 'var(--color-error)',
        warning: 'var(--color-warning)',
        info: 'var(--color-info)'
    };

    notification.textContent = message;
    notification.style.cssText = `
    padding: var(--space-md) var(--space-xl);
    background: ${colors[type]};
    color: white;
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-lg);
    font-weight: 600;
    animation: slideInLeft 0.3s ease-out;
    min-width: 250px;
  `;

    container.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'fadeOut 0.3s ease-out';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}
// ==========================================
// Order Groceries Feature
// ==========================================

function initializeOrderDropdown() {
    const orderBtn = document.getElementById('order-groceries-btn');
    const dropdown = orderBtn?.parentElement;

    if (!orderBtn || !dropdown) return;

    // Toggle dropdown on button click
    orderBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        dropdown.classList.toggle('open');
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (!dropdown.contains(e.target)) {
            dropdown.classList.remove('open');
        }
    });

    // Handle order option clicks
    document.querySelectorAll('.order-option').forEach(option => {
        option.addEventListener('click', () => {
            const service = option.dataset.service;
            orderFromService(service);
            dropdown.classList.remove('open');
        });
    });
}

function getShoppingListText() {
    const ingredientsByCategory = categorizeIngredients();
    const categories = Object.keys(ingredientsByCategory);

    if (categories.length === 0) return '';

    let items = [];
    categories.forEach(category => {
        ingredientsByCategory[category].forEach(ingredient => {
            items.push(ingredient.name);
        });
    });

    return items.join(', ');
}

function orderFromService(service) {
    const shoppingList = getShoppingListText();

    if (!shoppingList) {
        showNotification('⚠️ Add meals to generate a shopping list first!', 'warning');
        return;
    }

    const encodedList = encodeURIComponent(shoppingList);

    const serviceUrls = {
        'instacart': `https://www.instacart.com/store/search/${encodedList}`,
        'amazon': `https://www.amazon.com/s?k=${encodedList}&i=amazonfresh`,
        'walmart': `https://www.walmart.com/search?q=${encodedList}`,
        'bigbasket': `https://www.bigbasket.com/ps/?q=${encodedList}`,
        'zepto': `https://www.zeptonow.com/search?query=${encodedList}`,
        'blinkit': `https://blinkit.com/s/?q=${encodedList}`
    };

    const serviceNames = {
        'instacart': 'Instacart',
        'amazon': 'Amazon Fresh',
        'walmart': 'Walmart Grocery',
        'bigbasket': 'BigBasket',
        'zepto': 'Zepto',
        'blinkit': 'Blinkit'
    };

    const url = serviceUrls[service];

    if (url) {
        // Copy list to clipboard for easy pasting
        navigator.clipboard.writeText(shoppingList).then(() => {
            showNotification(`📋 Shopping list copied! Opening ${serviceNames[service]}...`, 'success');
        }).catch(() => { });

        // Open service in new tab
        window.open(url, '_blank');
    } else {
        showNotification('❌ Service not available', 'error');
    }
}

// Initialize order dropdown on page load
document.addEventListener('DOMContentLoaded', () => {
    // This will be called after main DOMContentLoaded
    setTimeout(initializeOrderDropdown, 100);
});

console.log('🍽️ Meal Prep Pro V2 Loaded! Enhanced with 20+ recipes and advanced features!');

// ==========================================
// Chatbot - Meal Prep Assistant
// ==========================================

const chatbotResponses = {
    greetings: [
        "Hello! 👋 How can I help you with meal prep today?",
        "Hi there! Ready to plan some delicious meals? 🍽️",
        "Hey! I'm here to help with recipes, nutrition, and meal planning!"
    ],
    breakfast: [
        "🍳 **Great breakfast ideas:**\n• Avocado Toast with Poached Eggs (420 cal)\n• Greek Yogurt Parfait (320 cal)\n• Protein Power Pancakes (380 cal)\n• Overnight Oats (290 cal)\n\nJust drag any recipe to your calendar!",
        "For a healthy breakfast, try our Smoothie Power Bowl or Veggie Scramble! Both are packed with nutrients and easy to prep. 🌅"
    ],
    lunch: [
        "🥗 **Lunch favorites:**\n• Grilled Chicken Caesar Salad (450 cal)\n• Quinoa Buddha Bowl (520 cal)\n• Turkey & Avocado Wrap (380 cal)\n• Asian Chicken Lettuce Wraps (320 cal)\n\nPerfect for meal prep containers!",
        "For a quick lunch, the Turkey & Avocado Wrap takes only 10 minutes! Or prep a Mediterranean Pasta Salad that lasts all week. 🥙"
    ],
    dinner: [
        "🍽️ **Dinner suggestions:**\n• Herb-Crusted Salmon (580 cal, 45g protein)\n• Teriyaki Chicken Stir Fry (480 cal)\n• Thai Green Curry (485 cal)\n• Garlic Butter Shrimp Pasta (550 cal)\n\nAll great for batch cooking!",
        "Try our Classic Spaghetti Bolognese for a family-friendly dinner, or go light with Colorful Veggie Tacos! 🌮"
    ],
    snack: [
        "🍎 **Healthy snacks:**\n• Protein Power Smoothie (280 cal, 25g protein)\n• Hummus & Veggie Platter (180 cal)\n• Energy Trail Mix (240 cal)\n• Apple Slices with Almond Butter (210 cal)\n\nPerfect between meals!",
        "Keep cut veggies and hummus ready for quick snacking. Trail mix is great for on-the-go energy! 🥜"
    ],
    protein: [
        "💪 **High protein meals:**\n• Herb-Crusted Salmon - 45g protein\n• Grilled Chicken Caesar - 42g protein\n• Teriyaki Chicken Stir Fry - 38g protein\n• Garlic Butter Shrimp Pasta - 35g protein\n\nAim for 1.6-2.2g protein per kg bodyweight if you're active!",
        "For high protein breakfast, try our Protein Power Pancakes (28g) or Veggie Scramble (20g). Great for muscle recovery! 🏋️"
    ],
    vegetarian: [
        "🥬 **Vegetarian options:**\n• Quinoa Buddha Bowl\n• Mediterranean Pasta Salad\n• Colorful Veggie Tacos\n• Greek Yogurt Parfait\n• Overnight Oats\n\nAll delicious and meat-free!",
        "We have plenty of vegetarian recipes! Check the Recipes tab and use the 'Vegetarian' filter to see them all. 🌱"
    ],
    tips: [
        "📝 **Meal Prep Tips:**\n\n1️⃣ **Sunday prep** - Cook proteins and grains in bulk\n2️⃣ **Use containers** - Glass containers keep food fresh longer\n3️⃣ **Prep in stages** - Wash, chop, then cook\n4️⃣ **Label everything** - Include date and contents\n5️⃣ **Refrigerator rules** - Most meals last 4-5 days",
        "**Pro tip:** Start with 3 recipes per week, then scale up. Prep similar ingredients together to save time! ⏱️"
    ],
    shopping: [
        "🛒 Go to the **Shopping** tab to see your complete grocery list! It's automatically generated based on your meal plan. You can:\n• Check off items as you shop\n• Export to clipboard\n• Order directly from services like Instacart or Amazon Fresh",
        "**Shopping tip:** Check your pantry first! The shopping list shows estimated costs and groups items by category. 📋"
    ],
    calories: [
        "📊 Check the **Dashboard** tab for detailed nutrition analytics! You'll see:\n• Total weekly calories\n• Daily calorie breakdown\n• Macronutrient distribution (protein, carbs, fats)\n• Meal category summary",
        "For weight loss, aim for a 300-500 calorie deficit. For maintenance, most adults need 1800-2500 calories depending on activity level. 🎯"
    ],
    quick: [
        "⚡ **Quick meals under 15 minutes:**\n• Greek Yogurt Parfait (5 min)\n• Overnight Oats (5 min prep)\n• Hummus & Veggie Platter (5 min)\n• Turkey & Avocado Wrap (10 min)\n• Smoothie Power Bowl (8 min)\n\nPerfect for busy days!",
        "Use the '⚡ Quick Prep' filter in the Recipes tab to see all meals under 15 minutes! Great for busy weeknights. 🏃"
    ],
    help: [
        "🤖 **I can help you with:**\n\n• 🍳 Breakfast, lunch, dinner, snack ideas\n• 💪 High protein meal suggestions\n• 🥬 Vegetarian options\n• 📝 Meal prep tips and tricks\n• 🛒 Shopping list help\n• 📊 Calorie and nutrition info\n• ⚡ Quick meal suggestions\n\nJust ask away!",
        "Try asking me about specific meals, nutrition tips, or how to use the app features. I'm here to make meal planning easier! 😊"
    ],
    default: [
        "I'm not sure about that, but I can help with recipes, nutrition tips, meal prep advice, and using the app. Try asking about breakfast ideas or meal prep tips! 🍽️",
        "Hmm, let me think... Try asking about specific meals like 'breakfast ideas' or 'high protein meals'. I'm great at food questions! 😄",
        "I specialize in meal prep! Ask me about recipes, nutrition, shopping lists, or cooking tips. What would you like to know? 🧑‍🍳"
    ]
};

function initializeChatbot() {
    const fab = document.getElementById('chatbot-fab');
    const container = document.getElementById('chatbot-container');
    const closeBtn = document.getElementById('chatbot-close');
    const input = document.getElementById('chatbot-input');
    const sendBtn = document.getElementById('chatbot-send');
    const suggestions = document.querySelectorAll('.suggestion-chip');

    if (!fab || !container) return;

    // Toggle chatbot
    fab.addEventListener('click', () => {
        fab.classList.toggle('active');
        container.classList.toggle('active');
        if (container.classList.contains('active')) {
            input.focus();
        }
    });

    // Close chatbot
    closeBtn.addEventListener('click', () => {
        fab.classList.remove('active');
        container.classList.remove('active');
    });

    // Send message on button click
    sendBtn.addEventListener('click', () => sendChatMessage());

    // Send message on Enter key
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') sendChatMessage();
    });

    // Suggestion chips
    suggestions.forEach(chip => {
        chip.addEventListener('click', () => {
            const question = chip.dataset.question;
            input.value = question;
            sendChatMessage();
        });
    });
}

function sendChatMessage() {
    const input = document.getElementById('chatbot-input');
    const messagesContainer = document.getElementById('chatbot-messages');
    const userMessage = input.value.trim();

    if (!userMessage) return;

    // Add user message
    addChatMessage(userMessage, 'user');
    input.value = '';

    // Show typing indicator
    const typingDiv = document.createElement('div');
    typingDiv.className = 'typing-indicator';
    typingDiv.innerHTML = '<span></span><span></span><span></span>';
    messagesContainer.appendChild(typingDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;

    // Simulate response delay
    setTimeout(() => {
        typingDiv.remove();
        const response = getChatbotResponse(userMessage);
        addChatMessage(response, 'bot');
    }, 800 + Math.random() * 700);
}

function addChatMessage(message, sender) {
    const messagesContainer = document.getElementById('chatbot-messages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `chat-message ${sender}`;
    messageDiv.innerHTML = message.replace(/\n/g, '<br>').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    messagesContainer.appendChild(messageDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function getChatbotResponse(message) {
    const lowerMessage = message.toLowerCase();

    // Check for keywords
    if (/hello|hi|hey|good morning|good evening/.test(lowerMessage)) {
        return getRandomResponse('greetings');
    }
    if (/breakfast|morning meal|brunch/.test(lowerMessage)) {
        return getRandomResponse('breakfast');
    }
    if (/lunch|midday|noon meal/.test(lowerMessage)) {
        return getRandomResponse('lunch');
    }
    if (/dinner|evening meal|supper/.test(lowerMessage)) {
        return getRandomResponse('dinner');
    }
    if (/snack|between meals|hungry/.test(lowerMessage)) {
        return getRandomResponse('snack');
    }
    if (/protein|muscle|gym|workout|high protein/.test(lowerMessage)) {
        return getRandomResponse('protein');
    }
    if (/vegetarian|veggie|no meat|plant.based|vegan/.test(lowerMessage)) {
        return getRandomResponse('vegetarian');
    }
    if (/tip|advice|how to|prep|prepare|meal prep/.test(lowerMessage)) {
        return getRandomResponse('tips');
    }
    if (/shop|grocery|groceries|buy|list|ingredient/.test(lowerMessage)) {
        return getRandomResponse('shopping');
    }
    if (/calorie|calories|nutrition|macro|dashboard|analytics/.test(lowerMessage)) {
        return getRandomResponse('calories');
    }
    if (/quick|fast|easy|15 min|simple|busy/.test(lowerMessage)) {
        return getRandomResponse('quick');
    }
    if (/help|what can you|how do|feature|assist/.test(lowerMessage)) {
        return getRandomResponse('help');
    }
    if (/thank|thanks|awesome|great|perfect/.test(lowerMessage)) {
        return "You're welcome! 😊 Happy to help with your meal planning. Anything else you'd like to know?";
    }
    if (/bye|goodbye|later|see you/.test(lowerMessage)) {
        return "Goodbye! 👋 Happy cooking and enjoy your meals! Come back anytime you need meal prep help! 🍽️";
    }

    return getRandomResponse('default');
}

function getRandomResponse(category) {
    const responses = chatbotResponses[category];
    return responses[Math.floor(Math.random() * responses.length)];
}

// Initialize chatbot when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(initializeChatbot, 200);
});

