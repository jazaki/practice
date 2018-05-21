#importing modules

from sys import argv

script, user_name = argv

prompt = '> '

print(f'Hi {user_name}. I am the script {script}')
print("I have few questions for you...")

print(f"Do you like me {user_name} ?")

likes = input(prompt)

if likes.lower() == 'yes':
    print("I love u too")

elif likes.lower() == 'no' :
    print("It's Okay. Neither do I :p")

else:
    print("Sorry didn't get you")