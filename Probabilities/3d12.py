import math
import random
import statistics

dice = 3
sides = 12
rolls = 1000

num_array = []
medians = {}
print_bars = []

# Calculating random rolls (using sides, dice, and rolls) and building median distribution
def calc_med_dist():
    for i in range(0,rolls):
        nums = []

        for i in range(0,dice):
            nums.append(random.randrange(1,sides))

        num_array.append(round(statistics.median(nums)))

    # Adding up all the times each number was the median
    for i in num_array:
        medians[i] += 1
    
    make_print_array()

# Calc median distribution, re-rolling all medians of 1, 11, and 12
def calc_with_rerolls():
    for i in range(0,rolls):
        nums = []
        median = -1
        
        while median > 18 or median < 2: # Median starts at -1, so this always runs once. Will re-roll if 11, 12, or 1.
            nums = []

            for i in range(0,dice):
                nums.append(random.randrange(1,sides))
        
            median = round(statistics.median(nums))

        num_array.append(median)

    # Adding up all the times each number was the median
    for i in num_array:
        medians[i] += 1
    
    make_print_array()

# Calc median distribution, changing medians of 11 and 12 to 10, and median of 1 to 2
def calc_with_caps():
    for i in range(0,rolls):
        nums = []

        for i in range(0,dice):
            nums.append(random.randrange(1,sides))

        median = round(statistics.median(nums))

        # Capping 11 and 12 to 10, and 1 to 2 (changing medians)
        if median > 10:
            num_array.append(10)
        elif median < 2:
            num_array.append(2)
        else:
            num_array.append(median)

    # Adding up all the times each number was the median
    for i in num_array:
        medians[i] += 1
    
    make_print_array()

# Filling out the print bars for visual representation
def make_print_array():
    global sides
    global rolls

    for i in range(0,sides):
        divved = None

        if rolls > 100:
            divved = round((medians[i + 1] / (rolls / 100)))
        else:
            divved = round(medians[i + 1])
        
        for j in range(divved):
            print_bars[i] = print_bars[i] + "-"

#PRINT the data
def print_data():
    print("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")

    print("Median distribution of " + str(dice) + "d" + str(sides) + " rolled " + str(rolls) + " times:")

    for i in range(0,sides):
        print(str(print_bars[i]) + str(i + 1) + ": " + str(medians[i + 1]))

    print("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")

# Checks if a variable/input can be converted to integer
def check_for_int(num):
    try:
        int(num)
        return True
    except:
        return False

# Get sides, dice, and rolls
def get_input():
    global sides
    global dice
    global rolls

    temp_sides = input("Enter the number of sides on the dice: ")
    if check_for_int(temp_sides):
        print("assigned sides")
        sides = int(temp_sides)

    temp_dice = input("Enter the number of dice in one roll: ")
    if check_for_int(temp_dice):
        print("assigned dice")
        dice = int(temp_dice)

    temp_rolls = input("Enter the number times you want to roll: ")
    if check_for_int(temp_rolls):
        if int(temp_rolls) <= 100000:
            print("assigned rolls")
            rolls = int(temp_rolls)

# This doesn't really work yet, idk why
def select_distribution():
    global sides
    global dice

    print("Which median distribution function would you like to run?")
    print("Press 1 for default median distribution")
    print("Press 2 for capped median distribution")
    print("Press 3 for re-roll median distribution")

    test_num = input()

    if check_for_int(test_num) and test_num in range(1,4):
        test_num = int(test_num)

        if test_num == 1:
            calc_med_dist()
        elif test_num == 2:
            calc_with_caps()
        elif test_num == 3:
            calc_with_rerolls()

        new_test = input("Do you want to run another test? Press Y to run another test, or N to exit")

        if new_test == "Y":
            select_distribution()
        else:
            return 0

get_input()

# Building out the arrays and dictionaries so we can use them later
for i in range(sides):
    medians[(i + 1)] = 0
    print_bars.append("")

if sides == 12 and dice == 3:
    calc_with_rerolls()
else:
    calc_with_rerolls()


print_data()