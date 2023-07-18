import calendar

print('Welcome to the v3 super Calendar!\n')

year = int(input('Please enter the year: '))
month = int(input('Enter any month number: '))

print(calendar.month(year, month))

print('Good luck!')