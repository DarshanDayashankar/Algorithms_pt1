def sum(a, b):
    return (a + b)


def fib(n) : 
    if ( n == 0) : return 0
    elif (n == 1) : return 1
    else : return  fib(n-1) + fib(n-2)

def fibdp(n, memo = {}) : 
    if ( n == 0) : return 0
    elif (n == 1) : return 1
    elif (n in memo) : return memo[n]
    else : 
        memo[n] = fibdp(n-1, memo) + fibdp(n-2, memo)
        return memo[n]

list = [9, 8, 7, 4, 5, 3, 1, 2, 6]

def func(targetSum, list):
    length = len(list)
    result = []
    for i in range(length):
        for j in range(i+1, length):
            if list[i] + list[j] == targetSum:
                result.append((list[i], list[j]))
    return result

def func2(targetSum, list):
    length = len(list)
    result = []
    dict = {}
    for i in list :
        if (i in dict): dict[i] += 1
        else : dict[i] = 1
    for i in list :
        diff = targetSum - i
        if diff in dict:
            if (dict[i] > 0 and dict[diff] > 0):
                dict[i] -= 1
                dict[diff] -= 1
                if (dict[i] == 0 ): del dict[i]
                if (dict[diff] == 0 ): del dict[diff]
                result.append((i, diff))
    return result

def compress(str) :
    initVal = str[0]
    count = 1
    result = ''
    for i in range(1,len(str)):
        if(initVal == str[i]): count += 1
        else : 
            result += f"{initVal}{count}"
            count = 1
            initVal = str[i]
    result += f"{initVal}{count}"
    return result


print(func(11, list))
print(func2(11, list))