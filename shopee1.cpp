#include <iostream>
 
using namespace std;
 
int main()
{
    int x, y, man_num = 0;
    long long a[40][40];
    bool man[40][40];
 
    cin >> x >> y >> man_num;
    for (int i = 0; i <= x; i++)
    {
        for (int j = 0; j <= y; j++)
        {
            man[i][j] = true;
        }
    }
 
    while (man_num--)
    {
        int man_x, man_y;
        cin >> man_x >> man_y;
 
        man[man_x][man_y] = false;
    }
 
 
    for (int i = 0; i <= x; i++)
    {
        for (int j = 0; j <= y; j++)
        {
            if (i == 0 || j == 0)
            {
                a[i][j] = 1;
            }
            else if (!man[i][j])
            {
                a[i][j] = 0;
            }
            else
            {
                a[i][j] = a[i - 1][j] + a[i][j - 1];
            }
 
        }
    }
    cout << a[x][y] << endl;
 
    return 0;
}