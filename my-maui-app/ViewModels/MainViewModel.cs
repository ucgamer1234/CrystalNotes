using System.ComponentModel;
using System.Runtime.CompilerServices;
using System.Windows.Input;

namespace my_maui_app.ViewModels
{
    public class MainViewModel : INotifyPropertyChanged
    {
        private string _username;
        private string _email;
        private string _password;

        public string Username
        {
            get => _username;
            set
            {
                _username = value;
                OnPropertyChanged();
            }
        }

        public string Email
        {
            get => _email;
            set
            {
                _email = value;
                OnPropertyChanged();
            }
        }

        public string Password
        {
            get => _password;
            set
            {
                _password = value;
                OnPropertyChanged();
            }
        }

        public ICommand SignInCommand { get; }
        public ICommand SignUpCommand { get; }

        public MainViewModel()
        {
            SignInCommand = new Command(OnSignIn);
            SignUpCommand = new Command(OnSignUp);
        }

        private void OnSignIn()
        {
            // Logic for sign-in
        }

        private void OnSignUp()
        {
            // Logic for sign-up
        }

        public event PropertyChangedEventHandler PropertyChanged;

        protected virtual void OnPropertyChanged([CallerMemberName] string propertyName = null)
        {
            PropertyChanged?.Invoke(this, new PropertyChangedEventArgs(propertyName));
        }
    }
}