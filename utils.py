text = '''
桦树  耐心  桂花  秋裤  指南针
守护  化石  帮助  抽水  登山鞋
'''

print(','.join(map(lambda item: f'\"{item}\"',text.split())))
