import { Link } from "react-router-dom";
import './statsinfo.scss';

function QuickbooksStats() {
  return (
    <section className='section-padding'>
      <div className='container'>
        <h2 className='mb-3'>What is QuickBooks?</h2>
        <div className='row'>
          <div className='col-3 mb-2-xs'>
            <p>QuickBooks is a user-friendly, simple accounting software that tracks your business income and expenses, and organises your financial information for you, eliminating manual data entry.</p>
            <p>QuickBooks simplifies small business accounting and automates tasks such as; Bookkeeping, Invoicing, Time tracking, Sales tax management, Budgeting, Bank reconciliation and Inventory tracking.</p>
            <Link className="button">Read more</Link>
          </div>
          <div className='col-3 mb-2-xs'>
            <div className='feature-card'>
              <h4>All your work in one place</h4>
              <p>Manage your work, your clients and your accounting practice, all under one login with QuickBooks Online Accountant.</p> <p>You can easily keep track of your business expenses so you can save time, not receipts. </p>
              <Link>Read more</Link>
            </div>
          </div>
          <div className='col-3'>
            <div className='feature-card'>
              <h4>Easy, efficient and innovative</h4>
              <p>Access anytime, anywhere and streamline productivity with accountant-only tools.</p>
              <p>QuickBooks makes it easy to monitor and share how your business is performing and trusted by over 600,000 accountants worldwide.</p>
              <Link>Read more</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default QuickbooksStats;
