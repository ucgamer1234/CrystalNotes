using System.ComponentModel;
using System.Runtime.CompilerServices;
using System.Windows.Input;

namespace MyMauiApp.ViewModels
{
    public class SignInViewModel : INotifyPropertyChanged
    {
        private string username;
        private string password;

        public string Username
        {
            get => username;
            set
            {
                username = value;
                OnPropertyChanged();
            }
        }

        public string Password
        {
            get => password;
            set
            {
                password = value;
                OnPropertyChanged();
            }
        }

        public ICommand SignInCommand { get; }

        public SignInViewModel()
        {
            SignInCommand = new Command(OnSignIn);
        }

        private void OnSignIn()
        {
            // Implement sign-in logic here
            // Validate input and authenticate user
        }

        public event PropertyChangedEventHandler PropertyChanged;

        protected virtual void OnPropertyChanged([CallerMemberName] string propertyName = null)
        {
            PropertyChanged?.Invoke(this, new PropertyChangedEventArgs(propertyName));
        }
    }
}