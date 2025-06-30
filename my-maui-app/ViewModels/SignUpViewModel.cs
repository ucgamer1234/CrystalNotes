using System.ComponentModel;
using System.Runtime.CompilerServices;
using System.Windows.Input;

namespace my_maui_app.ViewModels
{
    public class SignUpViewModel : INotifyPropertyChanged
    {
        private string username;
        private string email;
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

        public string Email
        {
            get => email;
            set
            {
                email = value;
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

        public ICommand SignUpCommand { get; }

        public SignUpViewModel()
        {
            SignUpCommand = new Command(OnSignUp);
        }

        private void OnSignUp()
        {
            // Implement sign-up logic here, such as validation and user creation
        }

        public event PropertyChangedEventHandler PropertyChanged;

        protected virtual void OnPropertyChanged([CallerMemberName] string propertyName = null)
        {
            PropertyChanged?.Invoke(this, new PropertyChangedEventArgs(propertyName));
        }
    }
}