// Basic Component with Props Interface
// UserCard.tsx
interface UserCardProps {
  name: string;
  age: number;
  isActive: boolean;
}

const UserCard: React.FC<UserCardProps> = ({ name, age, isActive }) => {
  return (
    <div className="user-card">
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Status: {isActive ? 'Active' : 'Inactive'}</p>
    </div>
  );
};

// Usage
<UserCard name="John Doe" age={30} isActive={true} />
