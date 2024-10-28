class Bank:
    def __init__(self,name,acc_number,balance):
        self.name = name
        self.acc_number = acc_number
        self.balance = balance
        
    
    def Balance_Check(self):
        print(f'Your Current Balance : {self.balance}')

    def Account_Opening(self):
        save_name = self.name
        save_acc_number = self.acc_number
        save_balance = self.balance
        print(f"Account Holder Name is: {self.name}, and Account Number is : {self.acc_number}, Current Saving Balance is: {self.balance}")

    def Deposit(self,deposit):
        

        self.deposit = deposit
        if self.deposit<0:
            print("Negative Amount Not be Deposited")
        else:
            self.balance +=self.deposit
            print(self.balance)
            print(f"Amount Credited {self.deposit}. Your Current Balance is :{self.balance}")


    def Withdraw(self,withdraw):
        self.Withdraw = withdraw
        self.balance -=self.Withdraw
        print(f"Your Withdraw Amount is {self.Withdraw} and Your Current Balance is: {self.balance}")
    


person3 = Bank("Venkat",511123,1299)
person3.Withdraw(99)
person3.Deposit(-200)
person3.Balance_Check()

