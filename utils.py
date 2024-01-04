text = '''
1+8=      6+9=       16-5=      7-3=
10+7=    16-7=     5+4-6=    10-8+5=
'''

print(','.join(map(lambda item: f'\"{item}\"',text.split())))
